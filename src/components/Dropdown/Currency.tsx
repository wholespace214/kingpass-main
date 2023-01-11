import { useState, useRef, useEffect } from 'react'
import styled from "styled-components"
import { BusdIcon, UsdcIcon, UsdtIcon } from 'src/config/images'
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
import contracts from 'src/contracts/contracts.json'

interface CurrencyArrProps {
    icon: string;
    name: string;
    address: string;
}

const CurrencyArr: CurrencyArrProps[] = [
    {
        icon: BusdIcon,
        name: "BUSD",
        address: contracts.KINGpass_abi.busdAddress
    },
    {
        icon: UsdtIcon,
        name: "USDT",
        address: contracts.KINGpass_abi.usdtAddress
    },
    {
        icon: UsdcIcon,
        name: "USDC",
        address: contracts.KINGpass_abi.usdcAddress
    }
]

interface CurrencyProps {
    state: CurrencyArrProps;
    setState: (prop: string, value: string | number | boolean | CurrencyArrProps) => void;
}

export const CurrencyDropDown = (props: CurrencyProps) => {
    const { state, setState } = props;
    const [isOpen, setOpen] = useState(false);
    const currencyRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
        if (currencyRef.current && !currencyRef.current.contains(event.target as any)) {
            setOpen(false);
        }
      };

      useEffect(() => {
        document.addEventListener('mousedown', (event) => handleClickOutside(event as any));
      }, [currencyRef]);
    return(
        <CurrencyDropDownWrapper data-aria-expanded={isOpen}  ref={currencyRef}>
            <CurrencyDropDownButton onClick={() => setOpen(true)}>
                <DropdownLabel>
                    <CurrencyUnit icon={state.icon} name={state.name} />
                    <DropDownIcon>
                    {isOpen ? <RiArrowUpSFill style={{ width: '100%', height: '100%' }}/> : <RiArrowDownSFill style={{ width: '100%', height: '100%' }} />}
                    </DropDownIcon>
                </DropdownLabel>
            </CurrencyDropDownButton>
            <CurrencyDropDownContainer className='dcontent' style={{ transform: isOpen ? 'scale(1)' : 'scale(0)' }}>
                {
                    CurrencyArr.map((item, index) => (
                        <CurrencyUnitWrapper key={index} onClick={() => {setState("currency", item); setOpen(false); }}>
                            <CurrencyUnit icon={item.icon} name={item.name} />
                        </CurrencyUnitWrapper>
                    ))
                }
            </CurrencyDropDownContainer>
        </CurrencyDropDownWrapper>
    )
}

interface UnitProp {
    icon: string;
    name: string;
}

const CurrencyUnit = (props: UnitProp) => {
    const { icon, name } = props;
    return(
        <CurrencyUnitContainer>
            <Img src={icon} alt="currency-icon" />
            <CurrencyName>{name}</CurrencyName>
        </CurrencyUnitContainer>
    )
}

const CurrencyDropDownWrapper = styled.div`
    position: relative;
    cursor: pointer;
    &[data-aria-expanded='true'] {
        .dcontent {
        opacity: 1;
        }
    }
    &[data-aria-expanded='false'] {
        .dcontent {
        opacity: 0;
        }
    }
`

const CurrencyDropDownButton = styled.div`
    display: flex;
    width: 117px;
    border: 2px solid #94EAFE;
    border-radius: 37px;
    justify-content: center;
    /* justify-content: space-between; */
    gap: 28px;
    padding: 20px 24px;
    margin: 0 auto;
    position: relative;

`

const CurrencyUnitContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`

const Img = styled.img`
    width: 22px;
    height: 22px;
`

const DropDownIcon = styled.div`
    width: 20px;
    height: 20px;
`

const CurrencyName = styled.div`
    font-size: 15px;
`

const DropdownLabel = styled.div`
    padding-left: 12px;
    display: flex;
    gap: 8px;
`

const CurrencyUnitWrapper = styled.div`
    width: 135px;
    height: 40px;
    display: flex;
    justify-content: center;

`

const CurrencyDropDownContainer = styled.div`
    border: 2px solid #FFE3FD;
    border-radius: 37px;
    padding: 15px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    background-color: #020202;
    transition: all linear 0.2s;
    position: absolute;
    margin-top: 3px;
`