import './Home.css'

const Home = () => {
    return (
        <>
            <img src={require('../Components/img/fon.jpg')} alt="logo" width={1550} height={684} style={{ float: "right" }} />
            <p style={{ fontSize: "50px", textAlign: "center" }}>•</p>
            <div className='about'>О нас</div>
            <div className='motion'> Motion — это недорогой, современный, комфортный фитнес-клуб, <br></br> оснащённый новейшим оборудованием.</div>
            <div className='mot'>Возможны занятия с персональным тренером, который индивидуально подберёт для вас комплекс упражнений<br></br> и соответствующую диету для достижения наилучших результатов. Наши специалисты помогут составить грамотную<br></br> программу, план питания и график занятий.</div>
            <img src={require('../Components/img/123.png')} alt="logo" width={900} style={{ marginTop: "30px", marginLeft: "310px" }} />
            <div className='team'>Команда </div>
            <div className='obor'>Оборудование </div>
            <div className='prog'>Программы</div>
            <div className='team1'>Более 15 опытных, высоко<br></br> квалифицированных тренеров всегда<br></br> рады вам помочь</div>
            <div className='obor1'>Мы работаем с профессиональным<br></br> американским оборудованием Precor,<br></br> Hoist и Formen</div>
            <div className='prog1'>Большой выбор популярных и<br></br> эффективных программ</div>
            
        </>
    )
}
export default Home