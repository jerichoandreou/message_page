
using System.Globalization;

namespace MauiChatApp.Converters
{
    public class BoolToTextColorConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return (bool)value ? Colors.White : Colors.Black;
        }
        
        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return value.Equals(Colors.White);
        }
    }
}
