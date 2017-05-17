using Camelonta.ImageCropper.Models;
using Umbraco.Web;

namespace Camelonta.ImageCropper.Classes
{
    public static class Utilities
    {
        public static string CroppedImageSource(CroppedImageModel model)
        {
            var umbracoHelper = new UmbracoHelper(UmbracoContext.Current);
            var image = umbracoHelper.Media(model.Id);

            if (model.SetCrop == null) return image.Url;

            return string.Format("{0}?crop={1},{2},{3},{4}&cropmode=percentage&width={5}&height={6}",
                image.Url,
                model.SetCrop.Coordinates.X1,
                model.SetCrop.Coordinates.Y1,
                model.SetCrop.Coordinates.X2,
                model.SetCrop.Coordinates.Y2,
                model.SetCrop.Width,
                model.SetCrop.Height);
        }
    }
}