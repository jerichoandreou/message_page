
namespace MauiChatApp.Models
{
    public class Contact
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Avatar { get; set; }
        public string LastMessage { get; set; }
        public string Timestamp { get; set; }
        public bool Unread { get; set; }
        public string Status { get; set; }
    }
}
