import {
  FolderSimpleDotted,
  Trash,
  PencilSimple,
  XCircle,
  MagnifyingGlass,
  Check,
  FolderSimplePlus,
  Plus,
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
  Export,
  FilmSlate,
  House,
  Gear,
  PushPin,
  X,
  Image,
  SlidersHorizontal,
} from "phosphor-react-native";
import { View } from "react-native";

const IconFactory = ({
  icon,
  color = "black",
  weight = "regular",
  size = 20,
  style = {},
}) => {
  switch (icon) {
    case "FolderSimpleDotted":
      return (
        <FolderSimpleDotted
          color={color}
          weight={weight}
          size={size}
          style={style}
        />
      );
    case "Trash":
      return <Trash color={color} weight={weight} size={size} style={style} />;
    case "PencilSimple":
      return (
        <PencilSimple color={color} weight={weight} size={size} style={style} />
      );
    case "X":
      return <X color={color} weight={weight} size={size} style={style} />;
    case "XCircle":
      return (
        <XCircle color={color} weight={weight} size={size} style={style} />
      );
    case "MagnifyingGlass":
      return (
        <MagnifyingGlass
          color={color}
          weight={weight}
          size={size}
          style={style}
        />
      );
    case "Check":
      return <Check color={color} weight={weight} size={size} style={style} />;
    case "FolderSimplePlus":
      return (
        <FolderSimplePlus
          color={color}
          weight={weight}
          size={size}
          style={style}
        />
      );
    case "Plus":
      return <Plus color={color} weight={weight} size={size} style={style} />;
    case "Link":
      return <Link color={color} weight={weight} size={size} style={style} />;
    case "Heart":
      return <Heart color={color} weight={weight} size={size} style={style} />;
    case "Star":
      return <Star color={color} weight={weight} size={size} style={style} />;
    case "Moon":
      return <Moon color={color} weight={weight} size={size} style={style} />;
    case "Smiley":
      return <Smiley color={color} weight={weight} size={size} style={style} />;
    case "SmileyMeh":
      return (
        <SmileyMeh color={color} weight={weight} size={size} style={style} />
      );
    case "SmileyXEyes":
      return (
        <SmileyXEyes color={color} weight={weight} size={size} style={style} />
      );
    case "AndroidLogo":
      return (
        <AndroidLogo color={color} weight={weight} size={size} style={style} />
      );
    case "Gift":
      return <Gift color={color} weight={weight} size={size} style={style} />;
    case "Flag":
      return <Flag color={color} weight={weight} size={size} style={style} />;
    case "Lightbulb":
      return (
        <Lightbulb color={color} weight={weight} size={size} style={style} />
      );
    case "PaintBrush":
      return (
        <PaintBrush color={color} weight={weight} size={size} style={style} />
      );
    case "Binoculars":
      return (
        <Binoculars color={color} weight={weight} size={size} style={style} />
      );
    case "Movie":
      return (
        <FilmSlate color={color} weight={weight} size={size} style={style} />
      );
    case "TV":
      return (
        <TelevisionSimple
          color={color}
          weight={weight}
          size={size}
          style={style}
        />
      );
    case "Music":
      return (
        <MusicNote color={color} weight={weight} size={size} style={style} />
      );
    case "Youtube":
      return (
        <YoutubeLogo color={color} weight={weight} size={size} style={style} />
      );
    case "Books":
      return <Books color={color} weight={weight} size={size} style={style} />;
    case "BookOpen":
      return (
        <BookOpen color={color} weight={weight} size={size} style={style} />
      );
    case "Cart":
      return (
        <ShoppingCartSimple
          color={color}
          weight={weight}
          size={size}
          style={style}
        />
      );
    case "Handbag":
      return (
        <Handbag color={color} weight={weight} size={size} style={style} />
      );
    case "CoatHanger":
      return (
        <CoatHanger color={color} weight={weight} size={size} style={style} />
      );
    case "Coffee":
      return <Coffee color={color} weight={weight} size={size} style={style} />;
    case "Brandy":
      return <Brandy color={color} weight={weight} size={size} style={style} />;
    case "ForkKnife":
      return (
        <ForkKnife color={color} weight={weight} size={size} style={style} />
      );
    case "Newspaper":
      return (
        <Newspaper color={color} weight={weight} size={size} style={style} />
      );
    case "Article":
      return (
        <Article color={color} weight={weight} size={size} style={style} />
      );
    case "File":
      return <File color={color} weight={weight} size={size} style={style} />;
    case "PaperClip":
      return (
        <Paperclip color={color} weight={weight} size={size} style={style} />
      );
    case "EnvelopeOpen":
      return (
        <EnvelopeOpen color={color} weight={weight} size={size} style={style} />
      );
    case "Archive":
      return (
        <Archive color={color} weight={weight} size={size} style={style} />
      );
    case "Exercise":
      return (
        <Barbell color={color} weight={weight} size={size} style={style} />
      );
    case "Bathtub":
      return (
        <Bathtub color={color} weight={weight} size={size} style={style} />
      );
    case "Medi":
      return (
        <FirstAid color={color} weight={weight} size={size} style={style} />
      );
    case "World":
      return (
        <GlobeHemisphereWest
          color={color}
          weight={weight}
          size={size}
          style={style}
        />
      );
    case "Map":
      return (
        <MapTrifold color={color} weight={weight} size={size} style={style} />
      );
    case "Train":
      return <Train color={color} weight={weight} size={size} style={style} />;
    case "Circle":
      return <Circle color={color} weight={weight} size={size} style={style} />;
    case "CheckedCircle":
      return (
        <CheckedCircle
          color={color}
          weight={weight}
          size={size}
          style={style}
        />
      );
    case "Export":
      return <Export color={color} weight={weight} size={size} style={style} />;
    case "House":
      return <House color={color} weight={weight} size={size} style={style} />;
    case "Setting":
      return <Gear color={color} weight={weight} size={size} style={style} />;
    case "PushPin":
      return (
        <PushPin color={color} weight={weight} size={size} style={style} />
      );
    case "Image":
      return <Image color={color} weight={weight} size={size} style={style} />;
    case "SlidersHorizontal":
      return (
        <SlidersHorizontal
          color={color}
          weight={weight}
          size={size}
          style={style}
        />
      );
    default:
      return <View></View>;
  }
};

export default IconFactory;
