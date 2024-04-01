import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mix N Match - Hoot Society",
  description: "Introducing \"Mix N Match\" - an innovative event IP poised to revolutionize Meghalaya's nightlife scene with a vibrant fusion of Hip-Hop, R&B, and Afrobeats music. Prepare to be immersed in an unparalleled audiovisual journey. At the heart of our mission is bridging the gap between local talent and national luminaries. We strive to spotlight the rich pool of talent within Meghalaya while also featuring renowned artists from across the nation. Through collaboration and adedicated platform, \"Mix N Match\" serves as a catalyst for artistic advancement and cultural exchange. With a steadfast commitment to excellence, every facet of the event is meticulously curated to ensure an unforgettable experience for all attendees.",
  keywords: [
      "Mix N Match event", "Hoot Society", "Meghalaya nightlife", "music festival in Meghalaya",
      "Hip-Hop and R&B", "Afrobeats music", "local talent in Meghalaya", "national artists in India",
      "live music event", "cultural exchange", "audiovisual experience", "entertainment in Meghalaya",
      "upcoming music festivals", "music events in India"
  ],
  date: "2024-05-20",
  location: "Shillong, Meghalaya, India",
  tags: ["Music Festival", "Nightlife", "Live Performance", "Cultural Event"],
  organizer: "Onlybees Hoot Society",
  audience: "Music enthusiasts, Party-goers, Cultural explorers, Local and National artists",
  socialMediaHashtags: ["#MixNMatchHootSociety", "#MeghalayaMusicFest", "#HootSocietyEvents"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
