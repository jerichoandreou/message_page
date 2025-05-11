
using MauiChatApp.Models;

namespace MauiChatApp.Services
{
    public interface IMessageService
    {
        List<Contact> GetContacts();
        List<Message> GetMessages(string contactId);
        void SendMessage(string contactId, string content);
    }
}
