
using System.Globalization;

namespace MauiChatApp.Converters
{
    public class BoolToColorConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return (bool)value ? Colors.Purple : Colors.LightGray;
        }
        
        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return value.Equals(Colors.Purple);
        }
    }
}
