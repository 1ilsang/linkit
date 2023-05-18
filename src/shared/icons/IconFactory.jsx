import {
  FolderSimpleDotted,
  Trash,
  PencilSimple,
  XCircle,
  MagnifyingGlass,
  Check,
  FolderSimplePlus,
  Link,
  Heart,
  Star,
  Moon,
  Smiley,
  SmileyMeh,
  SmileyXEyes,
  AndroidLogo,
  Gift,
  Flag,
  Lightbulb,
  PaintBrush,
  Binoculars,
  TelevisionSimple,
  MusicNote,
  YoutubeLogo,
  Books,
  BookOpen,
  ShoppingCartSimple,
  Handbag,
  CoatHanger,
  Coffee,
  Brandy,
  ForkKnife,
  Newspaper,
  Article,
  File,
  Paperclip,
  EnvelopeOpen,
  Archive,
  Barbell,
  Bathtub,
  FirstAid,
  GlobeHemisphereWest,
  MapTrifold,
  Train,
  Circle,
  CheckedCircle,
  Share,
  FilmSlate,
  House,
  Gear,
} from "phosphor-react-native";
import { View } from "react-native";

const IconFactory = ({ icon, color = "black", weight = "regular" }) => {
  switch (icon) {
    case "FolderSimpleDotted":
      return <FolderSimpleDotted color={color} />;
    case "Trash":
      return <Trash color={color} />;
    case "PencilSimple":
      return <PencilSimple color={color} />;
    case "XCircle":
      return <XCircle color={color} weight={weight} />;
    case "MagnifyingGlass":
      return <MagnifyingGlass color={color} />;
    case "Check":
      return <Check color={color} />;
    case "FolderSimplePlus":
      return <FolderSimplePlus color={color} />;
    case "Link":
      return <Link color={color} />;
    case "Heart":
      return <Heart color={color} />;
    case "Star":
      return <Star color={color} />;
    case "Moon":
      return <Moon color={color} />;
    case "Smiley":
      return <Smiley color={color} />;
    case "SmileyMeh":
      return <SmileyMeh color={color} />;
    case "SmileyXEyes":
      return <SmileyXEyes color={color} />;
    case "AndroidLogo":
      return <AndroidLogo color={color} />;
    case "Gift":
      return <Gift color={color} />;
    case "Flag":
      return <Flag color={color} />;
    case "Lightbulb":
      return <Lightbulb color={color} />;
    case "PaintBrush":
      return <PaintBrush color={color} />;
    case "Binoculars":
      return <Binoculars color={color} />;
    case "Movie":
      return <FilmSlate color={color} />;
    case "TV":
      return <TelevisionSimple color={color} />;
    case "Music":
      return <MusicNote color={color} />;
    case "Youtube":
      return <YoutubeLogo color={color} />;
    case "Books":
      return <Books color={color} />;
    case "BookOpen":
      return <BookOpen color={color} />;
    case "Cart":
      return <ShoppingCartSimple color={color} />;
    case "Handbag":
      return <Handbag color={color} />;
    case "CoatHanger":
      return <CoatHanger color={color} />;
    case "Coffee":
      return <Coffee color={color} />;
    case "Brandy":
      return <Brandy color={color} />;
    case "ForkKnife":
      return <ForkKnife color={color} />;
    case "Newspaper":
      return <Newspaper color={color} />;
    case "Article":
      return <Article color={color} />;
    case "File":
      return <File color={color} />;
    case "PaperClip":
      return <Paperclip color={color} />;
    case "EnvelopeOpen":
      return <EnvelopeOpen color={color} />;
    case "Archive":
      return <Archive color={color} />;
    case "Exercise":
      return <Barbell color={color} />;
    case "Bathtub":
      return <Bathtub color={color} />;
    case "Medi":
      return <FirstAid color={color} />;
    case "World":
      return <GlobeHemisphereWest color={color} />;
    case "Map":
      return <MapTrifold color={color} />;
    case "Train":
      return <Train color={color} />;
    case "Circle":
      return <Circle color={color} />;
    case "CheckedCircle":
      return <CheckedCircle color={color} />;
    case "Share":
      return <Share color={color} />;
    case "House":
      return <House color={color} weight={weight} />;
    case "Setting":
      return <Gear color={color} weight={weight} />;
    default:
      return <View></View>;
  }
};

export default IconFactory;
