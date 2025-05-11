
using System.Collections.ObjectModel;
using MauiChatApp.Models;
using MauiChatApp.Pages;
using MauiChatApp.Services;

namespace MauiChatApp.ViewModels
{
    public class MessagesListViewModel : BaseViewModel
    {
        private readonly IMessageService _messageService;
        public ObservableCollection<Contact> Contacts { get; } = new ObservableCollection<Contact>();
        
        public Command<string> NavigateToMessageCommand { get; }
        
        public MessagesListViewModel(IMessageService messageService)
        {
            _messageService = messageService;
            Title = "Messages";
            
            NavigateToMessageCommand = new Command<string>(NavigateToMessage);
            
            LoadContacts();
        }
        
        private async void LoadContacts()
        {
            if (IsBusy)
                return;
            
            IsBusy = true;
            
            try
            {
                Contacts.Clear();
                var contacts = _messageService.GetContacts();
                foreach (var contact in contacts)
                {
                    Contacts.Add(contact);
                }
            }
            finally
            {
                IsBusy = false;
            }
        }
        
        private async void NavigateToMessage(string contactId)
        {
            if (string.IsNullOrEmpty(contactId))
                return;
            
            var parameters = new Dictionary<string, object>
            {
                { "ContactId", contactId }
            };
            
            await Shell.Current.GoToAsync($"{nameof(MessagePage)}", true, parameters);
        }
    }
}
