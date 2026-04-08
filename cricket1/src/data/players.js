import dho from '../assets/dho.jpg';
import virat from "../assets/vir.jpg";
import sachin from "../assets/sa.jpg";
import rahul from "../assets/kl.jpg";
import boom from "../assets/bum.jpg";
import hardik from "../assets/har.jpg";
import anderson from "../assets/andersion.jpg";
import archer from "../assets/archer.jpg";
import yuv from "../assets/yuv.jpg";
import warner from "../assets/warner.jpg";
import sto from "../assets/stokes.jpg";
import smith from "../assets/smith.jpg";
import shakib from "../assets/shakib.jpg";
import max from "../assets/max.jpg";
import markram from "../assets/markram.jpg";
import malinga from "../assets/malinga.jpg";
import lee from "../assets/lee.jpg";
import jaddu from "../assets/jaddu.jpg";
import gill from "../assets/gill.jpg";
import cummins from "../assets/cummins.jpg";
import broad from "../assets/broad.jpg";
import brevis from "../assets/brevis.jpg";




const players = [
                  {
                      id: 1,
                      name: "Virat Kohli",
                      age: 36,
                      role: "batsman",
                      photo: virat,
                      stats: {
                          t20: { runs: 4008, matches: 115 },
                          odi: { runs: 13848, matches: 295 },
                          test: { runs: 8848, matches: 113 },
                          ipl: { runs: 7263, matches: 237 }
                      }
                  },
          
                  {
                      id: 2,
                      name: "Sachin Tendulkar",
                      age: 51,
                      role: "batsman",
                      photo: sachin,
                      stats: {
                          t20: { runs: 10, matches: 1 },
                          odi: { runs: 18426, matches: 463 },
                          test: { runs: 15921, matches: 200 },
                          ipl: { runs: 2334, matches: 78 }
                      }
                  },
          
                  {
                      id: 3,
                      name: "KL Rahul",
                      age: 33,
                      role: "batsman",
                      photo: rahul,
                      bating: {
                          t20: { runs: 2265, matches: 72 },
                          odi: { runs: 3218, matches: 91 },
                          test: { runs: 4053, matches: 67 },
                          ipl: { runs: 5222, matches: 145 }
                      }
                  },
          
                  {
                      id: 4,
                      name: "Hardik Pandya",
                      age: 31,
                      role: "allrounder",
                      photo: hardik,
                      stats: {
                          t20: { runs: 1348, matches: 92 },
                          odi: { runs: 1769, matches: 86 },
                          test: { runs: 532, matches: 11 },
                          ipl: { runs: 2525, matches: 137 }
                      }
                  },
          
                  {
                      id: 5,
                      name: "Jasprit Bumrah",
                      age: 31,
                      role: "bowler",
                      photo: boom,
                      stats: {
                          t20: { runs: 8, matches: 60 },
                          odi: { runs: 19, matches: 89 },
                          test: { runs: 65, matches: 36 },
                          ipl: { runs: 56, matches: 123 }
                      }
                  },
                  {
                      id: 6,
                      name: "David Warner",
                      age: 38,
                      role: "batsman",
                      photo: warner,
                      stats: {
                          t20: { runs: 3277, matches: 99 },
                          odi: { runs: 6932, matches: 161 },
                          test: { runs: 8786, matches: 112 },
                          ipl: { runs: 6565, matches: 184 }
                      }
                  },
                  {
                      id: 7,
                      name: "Steve Smith",
                      age: 35,
                      role: "batsman",
                      photo: smith,
                      stats: {
                          t20: { runs: 1000, matches: 63 },
                          odi: { runs: 5544, matches: 170 },
                          test: { runs: 9700, matches: 109 },
                          ipl: { runs: 2485, matches: 103 }
                      }
                  },
                  {
                      id: 8,
                      name: "Ravindra Jadeja",
                      age: 36,
                      role: "allrounder",
                      photo: jaddu,
                      stats: {
                          t20: { runs: 480, matches: 64 },
                          odi: { runs: 2756, matches: 197 },
                          test: { runs: 3190, matches: 73 },
                          ipl: { runs: 2692, matches: 240 }
                      }
                  },
                  {
                      id: 9,
                      name: "Shubman Gill",
                      age: 25,
                      role: "batsman",
                      photo: gill,
                      stats: {
                          t20: { runs: 578, matches: 21 },
                          odi: { runs: 2328, matches: 47 },
                          test: { runs: 1893, matches: 44 },
                          ipl: { runs: 2790, matches: 103 }
                      }
                  },
                  {
                      id: 10,
                      name: "Stuart Broad",
                      age: 38,
                      role: "bowler",
                      photo: broad,
                      stats: {
                          t20: { runs: 230, matches: 56 },
                          odi: { runs: 529, matches: 121 },
                          test: { runs: 3662, matches: 167 },
                          ipl: { runs: 48, matches: 10 }
                      }
                  },
                  {
                      id: 11,
                      name: "Aiden Markram",
                      age: 30,
                      role: "batsman",
                      photo: markram,
                      stats: {
                          t20: { runs: 1267, matches: 44 },
                          odi: { runs: 2357, matches: 70 },
                          test: { runs: 2415, matches: 39 },
                          ipl: { runs: 939, matches: 52 }
                      }
                  },
                  {
                      id: 12,
                      name: "Ben Stokes",
                      age: 33,
                      role: "allrounder",
                      photo: sto,
                      stats: {
                          t20: { runs: 585, matches: 43 },
                          odi: { runs: 3463, matches: 114 },
                          test: { runs: 6325, matches: 102 },
                          ipl: { runs: 920, matches: 43 }
                      }
                  },
                  {
                      id: 13,
                      name: "Yuvraj Singh",
                      age: 43,
                      role: "allrounder",
                      photo: yuv,
                      stats: {
                          t20: { runs: 1177, matches: 58 },
                          odi: { runs: 8701, matches: 304 },
                          test: { runs: 1900, matches: 40 },
                          ipl: { runs: 2750, matches: 132 }
                      }
                  },
                  {
                      id: 14,
                      name: "James Anderson",
                      age: 42,
                      role: "bowler",
                      photo: anderson,
                      stats: {
                          t20: { runs: 67, matches: 19 },
                          odi: { runs: 273, matches: 194 },
                          test: { runs: 1350, matches: 188 },
                          ipl: { runs: 0, matches: 0 }
                      }
                  },
                  {
                      id: 15,
                      name: "Glenn Maxwell",
                      age: 36,
                      role: "allrounder",
                      photo: max,
                      stats: {
                          t20: { runs: 2433, matches: 106 },
                          odi: { runs: 3990, matches: 149 },
                          test: { runs: 339, matches: 7 },
                          ipl: { runs: 2771, matches: 134 }
                      }
                  },
                  {
                      id: 16,
                      name: "Jofra Archer",
                      age: 29,
                      role: "bowler",
                      photo: archer,
                      stats: {
                          t20: { runs: 195, matches: 15 },
                          odi: { runs: 201, matches: 28 },
                          test: { runs: 201, matches: 13 },
                          ipl: { runs: 282, matches: 40 }
                      }
                  },
                  {
                      id: 17,
                      name: "Lasith Malinga",
                      age: 41,
                      role: "bowler",
                      photo: malinga,
                      stats: {
                          t20: { runs: 56, matches: 84 },
                          odi: { runs: 567, matches: 226 },
                          test: { runs: 275, matches: 30 },
                          ipl: { runs: 56, matches: 122 }
                      }
                  },
                  {
                      id: 18,
                      name: "Brett Lee",
                      age: 48,
                      role: "bowler",
                      photo: lee,
                      stats: {
                          t20: { runs: 150, matches: 25 },
                          odi: { runs: 1176, matches: 221 },
                          test: { runs: 1451, matches: 76 },
                          ipl: { runs: 38, matches: 38 }
                      }
                  },
                  {
                      id: 19,
                      name: "Shakib Al Hasan",
                      age: 37,
                      role: "allrounder",
                      photo: shakib,
                      stats: {
                          t20: { runs: 2382, matches: 129 },
                          odi: { runs: 7466, matches: 247 },
                          test: { runs: 4609, matches: 66 },
                          ipl: { runs: 793, matches: 71 }
                      }
                  },
                  {
                      id: 20,
                      name: "Dewald Brevis",
                      age: 21,
                      role: "batsman",
                      photo: brevis,
                      stats: {
                          t20: { runs: 600, matches: 23 },
                          odi: { runs: 0, matches: 0 },
                          test: { runs: 0, matches: 0 },
                          ipl: { runs: 230, matches: 10 }
                      }
                  },
                  {
                      id: 21,
                      name: "Pat Cummins",
                      age: 31,
                      role: "bowler",
                      photo: cummins,
                      stats: {
                          t20: { runs: 379, matches: 50 },
                          odi: { runs: 969, matches: 90 },
                          test: { runs: 1836, matches: 62 },
                          ipl: { runs: 515, matches: 52 }
                      }
                  },
                  {
                      id: 22,
                      name: "MS Dhoni",
                      age: 43,
                      role: "wicketkeeper",
                      photo: dho,
                      stats: {
                          t20: { runs: 1617, matches: 98 },
                          odi: { runs: 10773, matches: 350 },
                          test: { runs: 4876, matches: 90 },
                          ipl: { runs: 5082, matches: 264 }
                      }
                  }
          
              ];

  export default players;            