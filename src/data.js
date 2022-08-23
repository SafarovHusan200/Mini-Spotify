import { v4 as uuidv4 } from "uuid";
import hojiqilaman from "./assets/Ulug'bek_Rahmatullayev_Ota_onam_hoji_qilaman_www_Yulduzcha_com.mp3";
import onam from "./assets/onam.mp3";
import onammeni from "./assets/Shohzamon_Onam_meni___Шохзамон_Онам.mp3";
import dostim from "./assets/Mening do'stim  Менинг дўстим.mp3";
import qirolicham from "./assets/Mustafo - Qirolicham (audio 2022).mp3";
import giybatchilar from "./assets/G'iybatchilar.mp3";
import oylamadim from "./assets/O'ktam Aliyev - O'ylamadim.mp3";
import yomgir from "./assets/Yorqinxo'ja_Umarov_Yomg'ir_Official_Video___Ёркинхужа_Умаров_Ёмгир.mp3";
import yoroney from "./assets/Farrux Komilov - Yoroney.mp3";
import kozmunchoq from "./assets/Doston_Ergashev_Ko'zmunchog'im___Достон_Эргашев_Кузмунчогим_AUDIO.mp3";
import azarbayjan from "./assets/Elyorbek_Melibayev_Azerbayjan_Popuri_Artist_shou_Elyorbek_Meliboyev.mp3";
import negasenisevdim from "./assets/BEGZOD_HAQQIYEV_Nega_seni_sevdim.mp3";
import mayxonada from "./assets/Elyorbek Melibayev - Mayxonada.mp3";
import surxon from "./assets/surxon.mp3";
import omg from "./assets/Arash ft Snoop Dogg - OMG (Radio Edit).mp3";
import eslamading from "./assets/Benom - Eslamading.mp3";
import qizbermaganlar from "./assets/Boburbek Arapbaev - Qiz Bermaganlar.mp3";
import jana from "./assets/Bojalar - Jana.mp3";
import zerda from "./assets/Bojalar - Zerda.mp3";
import uylanamiz from "./assets/Bojalar ft Doston Ergashev - Uylanamiz.mp3";
import bolalar from "./assets/Bolalar - Popuri 2020.mp3";
import buka from "./assets/Dj Mos ft Dj Andys - Buka Buka.mp3";
import rojdeniye from "./assets/Elsever Qemli - У моей девушки день рождение.mp3";

function chillHop() {
  return [
    {
      name: "Ota-onam hoji qilaman",
      cover: "https://i.ytimg.com/vi/WZPdCQiykHE/maxresdefault.jpg",
      artist: "Ulug'bek Rahmatullayev",
      audio: hojiqilaman,
      color: ["#557840", "#4E698B"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Onam",
      cover: "https://i.ytimg.com/vi/76mw_PI1bgw/maxresdefault.jpg",
      artist: "Sardor Rahimxon",
      audio: onam,
      color: ["#557840", "#4E698B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Onam meni",
      cover: "https://i.ytimg.com/vi/D_Ye-yyWi1E/maxresdefault.jpg",
      artist: "Sardor Rahimxon",
      audio: onammeni,
      color: ["#557840", "#4E698B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "O'ylamadim",
      cover: "https://i.ytimg.com/vi/7xoi5w3YHFQ/hqdefault.jpg",
      artist: "O'ktam ALiyev",
      audio: oylamadim,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mening do'stim",
      cover: "https://i.ytimg.com/vi/CxWhavUCB24/maxresdefault.jpg",
      artist: "Avaz Dengiz",
      audio: dostim,
      color: ["#557840", "#4E698B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Qirolicham",
      cover: "https://muzfm.tv/uploads/singers/photos/mustafo---qirolicham.jpg",
      artist: "Mustafo",
      audio: qirolicham,
      color: ["#557840", "#4E698B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "G'iybatchilar",
      cover: "https://i.ytimg.com/vi/VIIeaj9F1zs/hqdefault.jpg",
      artist: "Elyorbek Melliboyev",
      audio: giybatchilar,
      color: ["#557840", "#4E698B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Yoroney",
      cover: "https://uzhits.net/images/farruh-komilov-yoroney.jpg",
      artist: "Farrux Komilov",
      audio: yoroney,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Yomg'ir",
      cover: "https://i.ytimg.com/vi/VjYHGrZuhyI/maxresdefault.jpg",
      artist: "Yorqinxo'ja Umarov",
      audio: yomgir,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Qashqadaryo Surxondaryo",
      cover: "https://i.ytimg.com/vi/8oMRGHSJGfc/maxresdefault.jpg",
      artist: "Sevinch Ismoilova",
      audio: surxon,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Ko'zmunchog'im",
      cover: "https://i.ytimg.com/vi/WVl6g5hvcDA/maxresdefault.jpg",
      artist: "Doston Ergashov",
      audio: kozmunchoq,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Azerbaycan",
      cover:
        "https://dsmi.uz/wp-content/uploads/2022/06/photo_2022-06-18_13-31-23.jpg",
      artist: "Elyorbek Melliboyev",
      audio: azarbayjan,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nega seni sevdim",
      cover: "https://i.ytimg.com/vi/Q0XYQSHgVOM/maxresdefault.jpg",
      artist: "Bekzod Haqqiyev",
      audio: negasenisevdim,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Mayxonada",
      cover: "https://i.ytimg.com/vi/6CsinTY5Ul4/maxresdefault.jpg",
      artist: "Elyorbek Melliboyev",
      audio: mayxonada,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Popuri",
      cover:
        "https://muzfm.tv/uploads/singers/photos/tohir-sodiqov---popuri-2020.jpg",
      artist: "Tohir Sodiqov",
      audio: bolalar,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Full Circle",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/3aaa079444cf9c1d4e0a1f53947321b29ff554c0-1024x1024.jpg",
      artist: "Moods",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35507",
      color: ["#557840", "#4E698B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Berry Drive",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/06/a4933e058391f06b10b6eceb01c437446a3d6c06-1024x1024.jpg",
      artist: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41938",
      color: ["#D7A300", "#2A4A6C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Everyday",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/973ae6f7b847fbfe9e2f6a2efbf2a9121ac8285f-1024x1024.jpg",
      artist: "Aves",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41890",
      color: ["#D7A300", "#2A4A6C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Rooftop Breeze",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/42878bcb02c1a3613f4913b226674cd36bac9830-1024x1024.jpg",
      artist: "Smile High, Richard Vagner",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36650",
      color: ["#04060B", "#A0AA9C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "After Hours",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/36fcc61f2d1c707e99f36706700d73229e2e8dff-1024x1024.jpg",
      artist: "Poldoore",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36942",
      color: ["#7C786D", "#621516"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Changes in Time",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/49bc1653b33bd42e570ecdeba7be86e8bd1b5c38-1024x1024.jpg",
      artist: "Shrimpnose",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
      color: ["#FCF6E8", "#D8A1C8"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "The Field From Spirited Away",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/1c9e8f008e40a1d5c496a85b2aaf8c96a14a3c88-1024x1024.jpg",
      artist: "Sleepy Fish, coa",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36919",
      color: ["#D09858", "#A00706"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Changing Winds",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/06/312458b974ab45c795d75ec3f0259caa3989103a-1024x1024.jpg",
      artist: "Knowmadic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41656",
      color: ["#884D4C", "#9E4E4D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Humility Piece",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/ce636ede9d5fc9fc2417ce40af98060fbcbdadca-1024x1024.jpg",
      artist: "Psalm trees",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41656",
      color: ["#BFB39C", "#BD8807"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Highs and Lows",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/9bb8c31852704fe0177b21ee1f674b71027b268f-1024x1024.jpg",
      artist: "Kissamilé",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41656",
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "OMG (Radio Edit)",
      cover: "https://i.ytimg.com/vi/Ta6DLXQdZCI/maxresdefault.jpg",
      artist: "Arash ft Snoop Dogg",
      audio: omg,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Eslamading",
      cover: "https://i.ytimg.com/vi/I1oQMjNbP00/maxresdefault.jpg",
      artist: "Benom",
      audio: eslamading,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Qiz Bermaganlar",
      cover: "https://i.ytimg.com/vi/66moTGOsjMI/sddefault.jpg",
      artist: "Boburbek Arapbaev",
      audio: qizbermaganlar,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jana",
      cover:
        "https://uzpesni.ru/wp-content/uploads/2020/05/Bojalar-Jana-mp3-image-1024x578.jpg",
      artist: "Bojalar",
      audio: jana,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Zerda",
      cover: "https://muzfm.tv/uploads/singers/photos/bojalar---zer.jpg",
      artist: "Bojalar",
      audio: zerda,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Uylanamiz",
      cover: "https://i.ytimg.com/vi/_nSjNXcHY5U/maxresdefault.jpg",
      artist: "Doston Ergashov",
      audio: uylanamiz,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Buka buka",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/04/b0/83/04b08395-5a10-df70-a107-1eb61dc257bc/artwork.jpg/400x400bb.jpg",
      artist: "DJ Mos & DJ Andys Feat",
      audio: buka,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "У моей девушки день рождение",
      cover: "https://i.ytimg.com/vi/lpO8aPgumMo/maxresdefault.jpg",
      artist: "Elsever Qemli",
      audio: rojdeniye,
      color: ["#87998F", "#506E3E"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
