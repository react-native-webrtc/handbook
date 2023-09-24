# Building WebRTC

This guide will show you how to prepare your own WebRTC build and how to include it for use with this module for React Native.  
  
First things first, clone our modules repository and look for the [`build-webrtc.py`](https://raw.githubusercontent.com/react-native-webrtc/react-native-webrtc/master/tools/build-webrtc.py) Python script located in the [`tools`](https://github.com/react-native-webrtc/react-native-webrtc/tree/master/tools) directory.

## Obtaining the Module

Simply run the following to clone the latest version of our modules repository.  

```
git clone https://github.com/react-native-webrtc/react-native-webrtc.git
```

Or download a compressed archive from [here](https://github.com/react-native-webrtc/react-native-webrtc/archive/refs/heads/master.zip).  
Then you can get everything extracted and you'll be ready to move onto the next steps.  

## Preparing

Running the `build-webrtc.py` Python script with `--setup` will download all the necessary tools for building WebRTC.
Now you have a staging area where the WebRTC source code and resulting build artifacts will be placed.  
  
A `build_webrtc` directory will be created containing everything.  
The setup process only needs to be carried out once per platform.

### iOS

```
python build-webrtc.py --setup --ios ~/src/
```

### Android

:::warning Make sure you have the Java JDK package installed.
Simply install the `default-jdk-headless` package if you're using a `Debian` based distribution of Linux,
some other distributions might also use the same package name.
:::

```
python build-webrtc.py --setup --android ~/src/
```

### Selecting the Branch

Once the setup process has finished, the target branch must be selected.  
Don't forget to also add any cherry-picks you might require.  
  
The following example shows how the M87 branch was made for an iOS build.

```bash
cd ~/src/build_webrtc/webrtc/ios/src/
git checkout -b build-M87 refs/remotes/branch-heads/4280
#git cherry-pick ...
```

Now the code is ready for building.  
  
:::tip Notice that since M79 Chromium has changed the branch naming scheme.
For example M87 is WebRTC branch 4280.  
For a full list of branches, see: https://chromiumdash.appspot.com/branches
:::

## Compiling

Now that most of the groundwork has been completed you can relax, get a drink.  
Don't be alarmed by extreme CPU usage while things compile.

### iOS

If you've switched branches then you need to run the following.

```
python build-webrtc.py --sync --ios ~/src/
```

Now you can build it.

```
python build-webrtc.py --build --ios ~/src/
```

The build artifacts will be located in `~/src/build_webrtc/build/ios/`.

### Android


:::warning Build Limitations.
WebRTC for Android can only be built on Linux currently.
:::
  
If you've switched branches then you need to run the following.

```
python build-webrtc.py --sync --android ~/src/
```

Now you can build it.

```
python build-webrtc.py --build --android ~/src/
```

The build artifacts will be located in `~/src/build_webrtc/build/android/`.

## Debug Builds

:::warning Performance Considerations.
Don't forget to build a non-debug version if you plan to take your app to production.
:::

If you want to get your hands dirty, lose a bit of performance but require a debugging build then that can be accomplished by adding `--debug` together with `--build`.  
  
The following will make an iOS debug build.

```
python build-webrtc.py --build --ios --debug ~/src/
```

The following will make an Android debug build.

```
python build-webrtc.py --build --android --debug ~/src/
```
