import { ReactNode } from 'react'
import {
  Briefcase,
  Gamepad2,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Package,
  Palmtree,
  Smartphone,
  Gpu,
  Rows4,
  MessageCircle,
  GamepadDirectional,
  Hotel,
  Map,
  ShieldCheck,
  Coffee,
  Component,
  CloudSync,
  Radical,
  Boxes,
  Braces,
} from 'lucide-react'
import {
  SiC,
  SiCmake,
  SiCplusplus,
  SiDrizzle,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiReact,
} from 'react-icons/si'

// When localized is true, the label must be retrieved from the next-intl json using the key "projects.tag.[tag name]"
type TagValue = { icon: ReactNode } & (
  | { localized: false; label: string }
  | { localized: true }
)

export const tags = {
  // Technology tags
  nextjs: {
    localized: false,
    label: 'Next.js',
    icon: <SiNextdotjs />,
  },
  react: {
    localized: false,
    label: 'React',
    icon: <SiReact />,
  },
  drizzle: {
    localized: false,
    label: 'Drizzle',
    icon: <SiDrizzle />,
  },
  posix: {
    localized: false,
    label: 'Posix',
    icon: <SiC />,
  },
  linux: {
    localized: false,
    label: 'Linux',
    icon: <SiLinux />,
  },
  cpp: {
    localized: false,
    label: 'C++',
    icon: <SiCplusplus />,
  },
  js: {
    localized: false,
    label: 'JavaScript',
    icon: <SiJavascript />,
  },
  canvas: {
    localized: false,
    label: 'Canvas',
    icon: <Gpu />,
  },
  cmake: {
    localized: false,
    label: 'CMake',
    icon: <SiCmake />,
  },
  flutter: {
    localized: false,
    label: 'Flutter',
    icon: <SiFlutter />,
  },
  firebase: {
    localized: false,
    label: 'Firebase',
    icon: <SiFirebase />,
  },
  // Project type tags
  fullstack: {
    localized: false,
    label: 'Full Stack',
    icon: <Layers />,
  },
  game: {
    localized: true,
    icon: <Gamepad2 />,
  },
  mobile: {
    localized: true,
    icon: <Smartphone />,
  },
  frontend: {
    localized: false,
    label: 'Frontend',
    icon: <LayoutDashboard />,
  },
  library: {
    localized: true,
    icon: <Package />,
  },
  // Context tags
  school: {
    localized: true,
    icon: <GraduationCap />,
  },
  hobby: {
    localized: true,
    icon: <Palmtree />,
  },
  internship: {
    localized: true,
    icon: <Briefcase />,
  },
  // Domain tags
  socialnetwork: {
    localized: true,
    icon: <MessageCircle />,
  },
  arcade: {
    localized: true,
    icon: <GamepadDirectional />,
  },
  tourguide: {
    localized: true,
    icon: <Hotel />,
  },
  cartography: {
    localized: true,
    icon: <Map />,
  },
  security: {
    localized: true,
    icon: <ShieldCheck />,
  },
  productivity: {
    localized: true,
    icon: <Coffee />,
  },
  // Technical concepts
  architecture: {
    localized: false,
    label: 'Clean Architecture',
    icon: <Boxes />,
  },
  mathematics: {
    localized: true,
    icon: <Radical />,
  },
  restapi: {
    localized: true,
    icon: <Braces />,
  },
  compiletimepolymorphism: {
    localized: true,
    icon: <Component />,
  },
  multithreading: {
    localized: false,
    label: 'Multithreading',
    icon: <Rows4 />,
  },
  hybridstockage: {
    localized: true,
    icon: <CloudSync />,
  },
} as const satisfies Record<string, TagValue>

export type Tag = keyof typeof tags
