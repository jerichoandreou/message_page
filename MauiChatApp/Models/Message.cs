
namespace MauiChatApp.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public string Timestamp { get; set; }
        public bool IsSent { get; set; }
    }
}
