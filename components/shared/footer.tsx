import Link from "next/link";
import {
  FaApple,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaRegCopyright,
  FaSpotify,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdMusicNote, MdOutlineEmail, MdPiano } from "react-icons/md";

export default function Footer() {
  return (
    <footer className=" mb-0 mt-auto w-full global-y-space">
      <br />
      <div className="w-full grid grid-cols-1 xs:grid-cols-3 text-sm global-gap">
        <div className="  text-left flex flex-col gap-1 text-muted-foreground">
          <p className="font-semibold text-foreground">Socials</p>
          <hr />
          <Link
            href={"https://instagram.com/dondycles"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaInstagram /> Instagram
          </Link>
          <Link
            href={"https://facebook.com/dondycles"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaFacebook />
            Facebook
          </Link>

          <Link
            href={"https://youtube.com/@johnrod"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaYoutube /> YouTube
          </Link>
          <Link
            href={"https://github.com/dondycles"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaGithub /> GitHub
          </Link>
          <Link
            href={"https://tiktok.com/dondycles"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaTiktok />
            TikTok
          </Link>
          <Link
            href={"https://x.com/dondycles"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaXTwitter />X
          </Link>
        </div>
        <div className="text-left flex flex-col gap-1 text-muted-foreground">
          <p className="font-semibold text-foreground">Buy</p>
          <hr />
          <Link
            href={"https://payhip.com/johnroddondoyano"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <MdPiano /> Piano & Strings MIDIs
          </Link>
          <Link
            href={"https://mymusicsheet.com/johnroddondoyano"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <MdMusicNote /> Piano Sheets
          </Link>
        </div>
        <div className="  text-left flex flex-col gap-1 text-muted-foreground">
          <p className="font-semibold text-foreground">Watch/Listen</p>
          <hr />
          <Link
            href={
              "https://open.spotify.com/artist/2opN2BRNgnBJIO932Kyr3U?si=3yH2nrluRqqFP1qOzM2TcA"
            }
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaSpotify />
            Spotify
          </Link>
          <Link
            href={
              "https://music.apple.com/us/artist/john-rod-dondoyano/1716913960"
            }
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaApple />
            Apple Music
          </Link>
          <Link
            href={"https://youtube.com/@johnrod"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaYoutube />
            YouTube
          </Link>
          <Link
            href={"https://tiktok.com/dondycles"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaTiktok />
            TikTok
          </Link>
        </div>
      </div>
      <div className="w-full text-xs text-muted-foreground flex items-center gap-4 flex-wrap-reverse">
        <p className="inline-flex items-center gap-1">
          <FaRegCopyright /> 2024 John Rod Dondoyano.
        </p>
        <p className="inline-flex items-center gap-1">
          <MdOutlineEmail />
          Inquries? Send it through my{" "}
          <span>
            <Link
              href={"mailto:johnroddondoyano8@gmail.com"}
              target="_blank"
              className="underline"
            >
              email.
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
