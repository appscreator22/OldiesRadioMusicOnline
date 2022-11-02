import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"RGR Classic",
            artist: "RGRClassic",
            cover: "https://img.freepik.com/psd-gratis/maqueta-microfono-escritorio-rectangular-vista-frontal_1332-10597.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://igor.torontocast.com/rgrclassichits",
            active: true,
        },
        {
            name:"Radio Minerva",
            artist: "RadioMinerva",
            cover: "https://img.freepik.com/vector-gratis/concepto-marco-neon-aire_52683-52393.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://icecast.movemedia.be/minerva",
            active: false,
        },
        {
            name:"Radio Plus",
            artist: "RadioPlus",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41309.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://radio2.pro-fhi.net:19073/stream",
            active: false,
        },
        {
            name:"Radio 10",
            artist: "Radio10",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41314.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://caster05.streampakket.com/proxy/8952/stream/1/",
            active: false,
        },
        {
            name:"Radio Roya",
            artist: "RadioRoya",
            cover: "https://img.freepik.com/foto-gratis/fondo-musica-o-podcast-auriculares-taza-cafe-mesa-azul-plana-vista-superior-plana_501050-983.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://server-26.stream-server.nl:18632/stream",
            active: false,
        },
        {
            name:"Nostalg",
            artist: "Nostalg",
            cover: "https://img.freepik.com/vector-gratis/silueta-aparato-radio_23-2147501018.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://22193.live.streamtheworld.com/NOSTALGIEWHATAFEELING_SC",
            active: false,
        },
        {
            name:"Radio 19",
            artist: "Radio19",
            cover: "https://img.freepik.com/vector-gratis/radio-plana-retro-ilustrada_23-2148812864.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://audiostream.radio19.fm:8200/stream/1/",
            active: false,
        },
        {
            name:"RBS - RADIO",
            artist: "RBSRADIO",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818543.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://streams.movemedia.eu/rbs",
            active: false,
        },
        {
            name:"Vlaamse Wonderjaren",
            artist: "VlaamseWonderjaren",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://c16.radioboss.fm:18096/stream",
            active: false,
        },
    ];
}

export default chillHop;


