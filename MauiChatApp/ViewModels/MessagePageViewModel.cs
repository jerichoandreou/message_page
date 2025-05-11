
using System.Collections.ObjectModel;
using MauiChatApp.Models;
using MauiChatApp.Services;

namespace MauiChatApp.ViewModels
{
    [QueryProperty(nameof(ContactId), "ContactId")]
    public class MessagePageViewModel : BaseViewModel
    {
        private readonly IMessageService _messageService;
        
        private string _contactId;
        public string ContactId
        {
            get => _contactId;
            set
            {
                SetProperty(ref _contactId, value);
                LoadContact();
                LoadMessages();
            }
        }
        
        private Contact _contact;
        public Contact Contact
        {
            get => _contact;
            set => SetProperty(ref _contact, value);
        }
        
        private string _messageText;
        public string MessageText
        {
            get => _messageText;
            set => SetProperty(ref _messageText, value);
        }
        
        public ObservableCollection<Message> Messages { get; } = new ObservableCollection<Message>();
        
        public Command SendMessageCommand { get; }
        
        public MessagePageViewModel(IMessageService messageService)
        {
            _messageService = messageService;
            SendMessageCommand = new Command(SendMessage, () => !string.IsNullOrWhiteSpace(MessageText));
            
            PropertyChanged += (_, args) => {
                if (args.PropertyName == nameof(MessageText))
                {
                    SendMessageCommand.ChangeCanExecute();
                }
            };
        }
        
        private void LoadContact()
        {
            var contacts = _messageService.GetContacts();
            Contact = contacts.FirstOrDefault(c => c.Id == ContactId);
            Title = Contact?.Name;
        }
        
        private void LoadMessages()
        {
            if (IsBusy || string.IsNullOrEmpty(ContactId))
                return;
            
            IsBusy = true;
            
            try
            {
                Messages.Clear();
                var messages = _messageService.GetMessages(ContactId);
                foreach (var message in messages)
                {
                    Messages.Add(message);
                }
            }
            finally
            {
                IsBusy = false;
            }
        }
        
        private void SendMessage()
        {
            if (string.IsNullOrWhiteSpace(MessageText) || string.IsNullOrEmpty(ContactId))
                return;
            
            _messageService.SendMessage(ContactId, MessageText);
            MessageText = string.Empty;
            
            // Reload messages to show the new ones
            LoadMessages();
        }
    }
}
