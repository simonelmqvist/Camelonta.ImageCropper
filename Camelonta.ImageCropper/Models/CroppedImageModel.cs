using Camelonta.ImageCropper.Classes;

namespace Camelonta.ImageCropper.Models
{
    public class CroppedImageModel
    {
        public int Id { get; set; }

        public Crop SetCrop { get; set; }
    }
}