
using Microsoft.Extensions.Logging;
using MauiChatApp.Services;
using MauiChatApp.ViewModels;

namespace MauiChatApp;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
            });

#if DEBUG
        builder.Logging.AddDebug();
#endif

        // Register services
        builder.Services.AddSingleton<IMessageService, MessageService>();
        
        // Register ViewModels
        builder.Services.AddTransient<MessagesListViewModel>();
        builder.Services.AddTransient<MessagePageViewModel>();
        
        // Register Pages
        builder.Services.AddTransient<Pages.MessagesListPage>();
        builder.Services.AddTransient<Pages.MessagePage>();

        return builder.Build();
    }
}
