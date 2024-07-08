# Mockmint

Mockmint is a powerful and easy-to-use mock data generator for developers, testers, and designers. It allows you to quickly generate a wide range of fake data for testing and development purposes. With Mockmint, you can save time and improve your workflow by generating high-quality mock data in seconds.

## Features

- **Wide Range of Data Types**: Generate personal information, business data, financial information, web data, and more.
- **Customizable**: Specify formats, ranges, and patterns for many data types to match your specific needs.
- **Export Options**: Export your generated data in CSV or JSON format.
- **User-Friendly Interface**: No coding required, just point and click.
- **Free to Use**: No sign-up or payment required.

## Data Generation

The data generation logic is handled by the `generateRandomData` function in the `dataGenerator` module. This function uses the `faker` library to generate random data based on the specified type and count.

## Export Functions

The `exportToCSV` and `exportToJSON` functions are used to export the generated data in CSV and JSON formats, respectively.

## Components

### Home Component

The Home component is the main entry point of the application. It handles the state management and rendering of the UI.

### GeneratedDataDisplay Component

The GeneratedDataDisplay component is responsible for displaying the generated data in a table format. It also provides options to copy data to the clipboard and export data in CSV or JSON format.

### SEOContent Component

The SEOContent component provides additional information about Mockmint, including FAQs and usage instructions.

## Styling

The application uses Tailwind CSS for styling. Global styles are defined in the `globals.css` file.

## Contributing

I welcome contributions to Mockmint! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Made by [Prateek Keshari](https://prateekkeshari.com) in Berlin. Check out [Scoop](https://scoop.prateekkeshari.com) – a UTM, Meta preview, and QR code generator.
