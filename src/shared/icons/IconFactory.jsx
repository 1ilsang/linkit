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
  Movie,
  TV,
  Music,
  Youtube,
  Books,
  BookOpen,
  Cart,
  Handbag,
  CoatHanger,
  Coffee,
  Brandy,
  ForkKnife,
  Newspaper,
  Article,
  File,
  PaperClip,
  EnvelopeOpen,
  Archive,
  Exercise,
  Bathtub,
  Medi,
  World,
  Map,
  Train,
  Circle,
  CheckedCircle,
  Share,
} from "phosphor-react-native";

const IconFactory = ({ icon, color = "black" }) => {
  switch (icon) {
    case "FolderSimpleDotted":
      return <FolderSimpleDotted color={color} />;
    case "Trash":
      return <Trash color={color} />;
    case "PencilSimple":
      return <PencilSimple color={color} />;
    case "XCircle":
      return <XCircle color={color} />;
    case "MagnifyingGlass":
      return <MagnifyingGlass color={color} />;
    case "Check":
      return <Check color={color} />;
    case "FolderSimplePlus":
      <FolderSimplePlus color={color} />;
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
      return <Movie color={color} />;
    case "TV":
      return <TV color={color} />;
    case "Music":
      return <Music color={color} />;
    case "Youtube":
      return <Youtube color={color} />;
    case "Books":
      return <Books color={color} />;
    case "BookOpen":
      return <BookOpen color={color} />;
    case "Cart":
      return <Cart color={color} />;
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
      return <PaperClip color={color} />;
    case "EnvelopeOpen":
      return <EnvelopeOpen color={color} />;
    case "Archive":
      return <Archive color={color} />;
    case "Exercise":
      return <Exercise color={color} />;
    case "Bathtub":
      return <Bathtub color={color} />;
    case "Medi":
      return <Medi color={color} />;
    case "World":
      return <World color={color} />;
    case "Map":
      return <Map color={color} />;
    case "Train":
      return <Train color={color} />;
    case "Circle":
      return <Circle color={color} />;
    case "CheckedCircle":
      return <CheckedCircle color={color} />;
    case "Share":
      return <Share color={color} />;
    default:
      return null;
  }
};

export default IconFactory;
