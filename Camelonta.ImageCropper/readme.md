## Installation

1. Create a new DataType in Umbraco Developer
2. Select Camelonta.ImageCropper from the drop down menu
3. Specify the width and height (aspect ratio) of the crop associated with the DataType

## Usage

1. Get the model from the view as a json string
2. Deserialize the json to the CroppedImageModel class:
CroppedImageModel myImageModel = JsonConvert.DeserializeObject<Camelonta.ImageCropper.Models.CroppedImageModel>(myCroppedImageJson);
3. Render the image:
< img src="@Camelonta.ImageCropper.Classes.Utilities.CroppedImageSource(myImageModel)" alt="" />

## Ideas for next version

* Add caption text
* Add alt-attribute