"use client";
import Box from "@/components/regular/Carts/Box";
import {
  allahPolygonIcon,
  bookmarkIcon,
  copyIcon,
  lightIcon,
  reportIcon,
  sheyarIcon,
} from "@/components/utils/icon-svg";
import { useState } from "react";

export default function SectionDua() {
  // Dua categories items
  const [data, setData] = useState([
    {
      id: "d1",
      title: "The servant is dependent on his Lord #1",
      dua: "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
      reference: "Surah Al-Fatir 35:15",
    },
    {
      id: "d2",
      title: "Conditions for Dua to be successful",
      dua: "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.",
      arabic:
        "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
      transliteration: `Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu`,
      translation: `There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.`,
      audio: true,
      reference: "Bukhari: 844",
    },
  ]);

  return (
    <>
      <div className="w-full space-y-2.5">
        <Box>
          <h1>
            <span className="text-primary mr-5 font-medium text-lg">
              Section:
            </span>
            The servant is dependent on his lord
          </h1>
        </Box>

        {/* dua sections */}
        <div className="space-y-2.5">
          {data?.map((item, idx) => (
            <SectionItem item={item} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}

// Section item
function SectionItem({ item }) {
  const {
    id,
    title,
    dua,
    arabic,
    transliteration,
    translation,
    audio,
    reference,
  } = item;

  return (
    <Box className="space-y-7">
      {/* title */}
      <div className="text-lg text-primary flex items-center justify-start gap-3.5">
        <figure> {allahPolygonIcon} </figure> <h2> {title} </h2>
      </div>

      {/* dua */}
      <div className="">
        {dua && <p> {dua} </p>}

        {arabic && <p className="text-2xl text-right mt-10"> {arabic} </p>}

        {transliteration && (
          <p className="mt-10">
            <span className="font-semibold">Transliteration: </span>
            <span className="italic">{transliteration}</span>
          </p>
        )}

        {translation && (
          <div className="mt-3">
            <span className="font-semibold">Translation: </span>
            {transliteration}
          </div>
        )}
      </div>

      {/* Reference */}
      <div className="">
        <h3 className="text-primary font-semibold text-lg"> Reference: </h3>
        <p className="text-base"> {reference} </p>
      </div>

      <div className="flex items-center justify-between">
        {/* audio */}
        <div>
          {audio && (
            <div className="w-full">
              <audio controls>
                <source src={audio} type="audio/mp3" />
              </audio>
            </div>
          )}
        </div>

        {/* Options */}
        <div className="w-full flex items-center justify-end">
          {/* copy button */}
          <OptionButton icon={copyIcon} />

          {/* bookmark button */}
          <OptionButton icon={bookmarkIcon} />

          {/* idea */}
          <OptionButton icon={lightIcon} />

          {/* sheyar */}
          <OptionButton icon={sheyarIcon} />

          {/* warning */}
          <OptionButton icon={reportIcon} />
        </div>
      </div>
    </Box>
  );
}

// option button
function OptionButton({ icon }) {
  return (
    <button className="text-iconColor text-2xl size-10 p-2.5 rounded-full hover:bg-primary/15 hover:text-primary flex items-center justify-center">
      {icon}
    </button>
  );
}
