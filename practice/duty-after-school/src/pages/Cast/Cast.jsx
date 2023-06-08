import { CastCard } from "../../components"

// Cast css
import './Cast.css'

const Cast = () => {
    const data = [
        {
            id: 1,
            realName: "Shin Hyun-Soo",
            castName: "Lee Chun-Ho",
            imgUrl: "https://cdn.idntimes.com/content-images/post/20230403/337156138-1256359518563872-1225671248991430061-n-f84866994cd46837fd1a8ab52fd944c1_600x400.jpg"
        },
        {
            id: 2,
            realName: "Moon Sang-Min",
            castName: "Wang Tae-Man",
            imgUrl: "https://cdn.idntimes.com/content-images/post/20230427/unknown-342720218-976164576877294-138825281747990403-n-bc6bc82f65431a8b57d4a30aa2367ca7_600x400.jpeg"
        },
        {
            id: 3,
            realName: "Choi Moon-Hee",
            castName: "Lee Na-Ra",
            imgUrl: "https://imgx.parapuan.co/crop/116x360:967x928/x/photo/2023/04/11/fakta-choi-moon-hee-karakter-per-20230411125006.jpg"
        },
        {
            id: 4,
            realName: "Kim Ki-Hae",
            castName: "Kim Chi-Yeol",
            imgUrl: "https://cdn.idntimes.com/content-images/community/2023/04/snapinstaapp-339114011-160790289880901-8770596365624662544-n-1080-96273372680aa88aa9cf94ccc910d747-8de00a38c3f1f2249d43753a0433ae12.jpg"
        },
        {
            id: 5,
            realName: "Kwon Eun-Bin",
            castName: "Yeon Bo-Ra",
            imgUrl: "https://aws-images-prod.sindonews.net/dyn/600/pena/sindo-article/original/2023/04/03/duty%20after%20school%202.jpg"
        },
        {
            id: 6,
            realName: "Im Se-Mi",
            castName: "Park Eun-Young",
            imgUrl: "https://cdn.idntimes.com/content-images/post/20230410/snapinstaapp-336158265-704714804782259-2982396868790037463-n-1080-871a60cb36405ce68052525bce12eca3.jpg"
        },
        {
            id: 7,
            realName: "Kim Su-Gyeoum",
            castName: "Kwon Il-Ha",
            imgUrl: "https://assets.ayobandung.com/crop/0x0:0x0/x/photo/2023/04/09/photo1681019993-3173049986.jpeg"
        },
        {
            id: 8,
            realName: "Kim So-Hee",
            castName: "Lee Soon-Yi",
            imgUrl: "https://cdn.idntimes.com/content-images/community/2023/04/snapinstaapp-339348353-137288679302471-1881060825749280655-n-1080-8bdaf005128ba7c11d16b85fe648685d-2cb012c0595095437df1e7de205ca2ff.jpg"
        },
        {
            id: 9,
            realName: "Shin Soo-Hyun",
            castName: "Cha So-yeon",
            imgUrl: "https://assets.suaramerdeka.com/crop/13x85:719x539/750x500/webp/photo/2023/04/28/image-1-2779482674.png"
        },
        {
            id: 10,
            realName: "Kim Min-Chul",
            castName: "Do Soo-Cheol",
            imgUrl: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/05/22/Kim-Min-Chul-1950987355.jpg"
        },
        {
            id: 11,
            realName: "Lee Yeon",
            castName: "No Ae-Sol",
            imgUrl: "https://cdn.idntimes.com/content-images/community/2023/04/snapinstaapp-335896859-3328197200763944-4827508297542560677-n-1080-8bdaf005128ba7c11d16b85fe648685d-6d4663e52558785ccc300bf62be6609a_600x400.jpg"
        },
        {
            id: 12,
            realName: "Yeo Joo-Ha",
            castName: "Kim Yu-Jeong",
            imgUrl: "https://www.layar.id/wp-content/uploads/2023/03/Yeo-Joo-Ha.jpg"
        },
    ]

    return(
        <div className="cast-wrapper">
            {data.map(cast => (
                <CastCard key={cast.id} realName={cast.realName} castName={cast.castName} imgUrl={cast.imgUrl}/>
            ))}
        </div>
    )
}

export default Cast