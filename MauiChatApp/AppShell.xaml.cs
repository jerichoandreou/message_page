
using MauiChatApp.Pages;

namespace MauiChatApp;

public partial class AppShell : Shell
{
    public AppShell()
    {
        InitializeComponent();
        
        Routing.RegisterRoute(nameof(MessagePage), typeof(MessagePage));
    }
}
