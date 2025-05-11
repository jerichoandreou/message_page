
using MauiChatApp.Models;

namespace MauiChatApp.Services
{
    public class MessageService : IMessageService
    {
        private readonly List<Contact> _contacts;
        private readonly Dictionary<string, List<Message>> _messages;
        
        public MessageService()
        {
            // Initialize with sample data
            _contacts = new List<Contact>
            {
                new Contact
                {
                    Id = "1",
                    Name = "Joanna Codilla",
                    Avatar = "dotnet_bot.svg",
                    LastMessage = "Oh ok, thanks!",
                    Timestamp = "9:50 AM",
                    Unread = false,
                    Status = "Online"
                },
                new Contact
                {
                    Id = "2",
                    Name = "Mike Johnson",
                    Avatar = "dotnet_bot.svg",
                    LastMessage = "I think I found your wallet at the park",
                    Timestamp = "Yesterday",
                    Unread = true,
                    Status = "Offline"
                },
                new Contact
                {
                    Id = "3",
                    Name = "Sarah Williams",
                    Avatar = "dotnet_bot.svg",
                    LastMessage = "Is the phone still available?",
                    Timestamp = "Yesterday",
                    Unread = false,
                    Status = "Offline"
                },
                new Contact
                {
                    Id = "4",
                    Name = "LostTrack Support",
                    Avatar = "dotnet_bot.svg",
                    LastMessage = "Thank you for using our app!",
                    Timestamp = "03/15/24",
                    Unread = false,
                    Status = "Online"
                }
            };
            
            // Initialize messages
            _messages = new Dictionary<string, List<Message>>();
            
            // Sample messages for contact 1
            _messages["1"] = new List<Message>
            {
                new Message { Id = 1, Content = "Hello", Timestamp = "9:41 AM", IsSent = true },
                new Message { Id = 2, Content = "Hello! Good Evening, this is Jessica from LostTrack's Contact Support team. How may I help you?", Timestamp = "9:42 AM", IsSent = false },
                new Message { Id = 3, Content = "Where can I find the matched users contact info?", Timestamp = "9:45 AM", IsSent = true },
                new Message { Id = 4, Content = "You can find the contact information of matched users by going to the 'Matches' tab and tapping on the specific item. There you'll see a 'Contact' button that will show you the information shared by the other user.", Timestamp = "9:48 AM", IsSent = false },
                new Message { Id = 5, Content = "Oh ok, thanks!", Timestamp = "9:50 AM", IsSent = true }
            };
            
            // Initialize empty message lists for other contacts
            foreach (var contact in _contacts)
            {
                if (!_messages.ContainsKey(contact.Id))
                {
                    _messages[contact.Id] = new List<Message>();
                }
            }
        }
        
        public List<Contact> GetContacts()
        {
            return _contacts;
        }
        
        public List<Message> GetMessages(string contactId)
        {
            if (_messages.TryGetValue(contactId, out var messages))
            {
                return messages;
            }
            
            return new List<Message>();
        }
        
        public void SendMessage(string contactId, string content)
        {
            if (_messages.TryGetValue(contactId, out var messages))
            {
                int newId = messages.Count > 0 ? messages.Max(m => m.Id) + 1 : 1;
                messages.Add(new Message
                {
                    Id = newId,
                    Content = content,
                    Timestamp = DateTime.Now.ToString("h:mm tt"),
                    IsSent = true
                });
                
                // Update last message in contact
                var contact = _contacts.FirstOrDefault(c => c.Id == contactId);
                if (contact != null)
                {
                    contact.LastMessage = content;
                    contact.Timestamp = DateTime.Now.ToString("h:mm tt");
                }
                
                // Simulate reply after a short delay
                Task.Run(async () =>
                {
                    await Task.Delay(1000);
                    
                    int replyId = messages.Max(m => m.Id) + 1;
                    messages.Add(new Message
                    {
                        Id = replyId,
                        Content = "Thank you for your message. Is there anything else I can help you with regarding your lost item?",
                        Timestamp = DateTime.Now.ToString("h:mm tt"),
                        IsSent = false
                    });
                });
            }
        }
    }
}
