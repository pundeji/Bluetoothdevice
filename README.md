# Bluetooth Device Manager

This React Native application allows you to scan a QR code to extract a device's MAC ID and connect to the physical Bluetooth device using that MAC ID.

## Features

- Scan QR codes containing device information (including MAC ID)
- Automatically extract the MAC ID from the QR code
- Connect to Bluetooth devices using the scanned MAC ID

## How It Works

1. **Scan QR Code:**  
   Use the built-in QR code scanner to scan a QR code. The QR code should contain a JSON object with a `"MAC ID"` field.

2. **Extract MAC ID:**  
   The app parses the QR code data and extracts the MAC ID.

3. **Connect to Device:**  
   The app uses the MAC ID to search for and connect to the corresponding Bluetooth device.

## Example QR Code Data

```json
{
  "DAQ Type": "C",
  "DAQ ID": "MD00000001",
  "MAC ID": "00:80:E1:26:9A:9A"
}
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start Metro bundler:

   ```bash
   npx react-native start
   ```

3. Run the app:

   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## License

MIT