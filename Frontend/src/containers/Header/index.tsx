import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setPlace } from "../../store/reducers/mainPlace";
import { RootReducer } from "../../store";
import { useGetNewLocationQuery } from "../../services/api";
import { setMap } from "../../store/reducers/map";
import { weatherIcon } from "../../utils/icons";
import Menu from "../../components/Menu";

import * as S from './styles'

import search from '../../assets/search.png'
import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png'

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data, error } = useGetNewLocationQuery(storedLocation)

    useEffect(() => {
        const iconUrl = weatherIcon(data?.current.is_day, data?.current.condition.code)
        if (data && iconUrl) {
            const id = `${data.location.lat}, ${data.location.lon}`
            const lat = data.location.lat
            const lng = data.location.lon
            const initialMapData = { id, lat, lng, iconUrl }
            dispatch(setMap(initialMapData))
        }
    }, [data])

    const [city, setCity] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
        navigate('/')
    }

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!data) return

        let normalizedCity = city.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
        let userCity = normalizedCity.trim()

        console.log(userCity)

        if (userCity === "fortaleza") {
            return dispatch(setPlace("-3.71, -38.54")), setCity("")
        }

        dispatch(setPlace(userCity))
        setCity("")
    }

    const getLocation = () => {
        navigate('/')
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handlePosition);
        } else {
            alert("Geolocalização não é suportada por este navegador.");
        }
    }

    const handlePosition = (position: GeolocationPosition) => {
        const newCity = `${position.coords.latitude}, ${position.coords.longitude}`

        dispatch(setPlace(newCity))
    }

    const toggleMenu = (state: boolean) => {
        setOpenMenu(state)
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    }, [])

    const refOne = useRef<HTMLDivElement>(null)

    const handleClickOutside = (e: MouseEvent) => {
        if (refOne.current && !refOne.current.contains(e.target as Node)) {
            setOpenMenu(false)
        }
    }

    return (
        <div>
            <S.MobileLogo className='mobileLogo' src={logo} alt="Logo" />
            <S.Header>
                <h1>
                    <img className='logo' src={logo} alt="Logo" />
                </h1>
                <S.InputContainer onSubmit={getWeather}>
                    <input
                        onChange={handleChange}
                        value={city} 
                        className={`input ${error ? 'inputError' : ''}`}
                        type="text"
                        placeholder='Pesquisar por local'
                    />
                    <button className='searchBtn' type="submit"><img src={search} className="searchIcon" title="Buscar" alt="Pesquisar" /></button>
                </S.InputContainer>
                <S.MenuContainer>
                    <S.ButtonContainer>
                        <button type="button" className="myLocation" onClick={getLocation}>Minha localização</button>
                    </S.ButtonContainer>
                    <S.Menu
                        src={menu}
                        alt="Ícone menu"
                        onClick={() => setOpenMenu(!openMenu)}
                    />
                </S.MenuContainer>
                {error && <span className="invalid">Local inválido.</span>}
            </S.Header>
            <S.MenuSpace ref={refOne}>
                {openMenu && <Menu toggleMenu={toggleMenu} />}
                <S.MobileInputContainer onSubmit={getWeather}>
                    <input
                        onChange={handleChange}
                        value={city} 
                        className={`mobileInput ${error ? 'mobileInputError' : ''}`}
                        type="text"
                        placeholder='Pesquisar por local'
                    />
                    <button className='searchBtn' type="submit"><img src={search} title="Buscar" alt="Pesquisar" /></button>
                </S.MobileInputContainer>
                {error && <span className="invalidMobile">Local inválido.</span>}
            </S.MenuSpace>
        </div>
    )
}

export default Header
