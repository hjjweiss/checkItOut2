# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "To Do"
      id: "todo"
      location: "example#todo" # Supersonic module#view type navigation
    }
    {
      title: "Stores"
      id: "stores"
      location: "example#stores"
    }
    {
      title: "Settings"
      id: "settings"
      location: "example#settings" # URLs are supported!
    }
  ]

  rootView:
     location: "example#todo"

  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  initialView:
   id: "initialView"
   location: "example#initialview"
