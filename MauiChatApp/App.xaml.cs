
using Microsoft.Maui;
using Microsoft.Maui.Controls;
using MauiChatApp.Pages;

namespace MauiChatApp
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new AppShell();
        }
    }
}
