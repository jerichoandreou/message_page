
using MauiChatApp.ViewModels;

namespace MauiChatApp.Pages;

public partial class MessagePage : ContentPage
{
    private readonly MessagePageViewModel _viewModel;
    
    public MessagePage(MessagePageViewModel viewModel)
    {
        InitializeComponent();
        _viewModel = viewModel;
        BindingContext = _viewModel;
    }
}
