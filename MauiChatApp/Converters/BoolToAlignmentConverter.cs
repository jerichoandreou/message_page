
using System.Globalization;

namespace MauiChatApp.Converters
{
    public class BoolToAlignmentConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return (bool)value ? LayoutOptions.End : LayoutOptions.Start;
        }
        
        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return value.Equals(LayoutOptions.End);
        }
    }
}
