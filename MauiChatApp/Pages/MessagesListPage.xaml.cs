
using MauiChatApp.ViewModels;

namespace MauiChatApp.Pages;

public partial class MessagesListPage : ContentPage
{
    private readonly MessagesListViewModel _viewModel;
    
    public MessagesListPage(MessagesListViewModel viewModel)
    {
        InitializeComponent();
        _viewModel = viewModel;
        BindingContext = _viewModel;
    }
}
