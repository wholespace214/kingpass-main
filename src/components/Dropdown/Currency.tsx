import { useState, useRef, useEffect } from 'react'
import styled from "styled-components"
import { RiMoneyDollarCircleFill, RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'

interface CurrencyArrProps {
    icon: React.ReactNode
    name: string;
}

const CurrencyArr: CurrencyArrProps[] = [
    {
        icon: <RiMoneyDollarCircleFill />,
        name: "USDT"
    },
    {
        icon: <RiMoneyDollarCircleFill />,
        name: "USDC"
    }
]

interface CurrencyProps {
    state: CurrencyArrProps;
    setState: (value: CurrencyArrProps) => void;
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
        <CurrencyDropDownWrapper>
        <CurrencyDropDownButton data-aria-expanded={isOpen} onClick={() => setOpen(!isOpen)} ref={currencyRef}>
            <DropdownLabel>
                <CurrencyUnit icon={state.icon} name={state.name} />
                <DropDownIcon>
                {isOpen ? <RiArrowUpSFill style={{ width: '100%', height: '100%' }}/> : <RiArrowDownSFill style={{ width: '100%', height: '100%' }} />}
                </DropDownIcon>
            </DropdownLabel>
        </CurrencyDropDownButton>
        <CurrencyDropDownContainer style={{ transform: isOpen ? 'scale(1)' : 'scale(0)' }}>
            {
                CurrencyArr.map((item, index) => (
                    <div key={index} onClick={() => setState(item)}>
                        <CurrencyUnit icon={item.icon} name={item.name} />
                    </div>
                ))
            }
        </CurrencyDropDownContainer>
        </CurrencyDropDownWrapper>
    )
}

interface UnitProp {
    icon: React.ReactNode;
    name: string;
}

const CurrencyUnit = (props: UnitProp) => {
    const { icon, name } = props;
    return(
        <CurrencyUnitContainer>
            {/* <Img src={icon} alt="currency-icon" /> */}
            {icon}
            <CurrencyName>{name}</CurrencyName>
        </CurrencyUnitContainer>
    )
}

const CurrencyDropDownWrapper = styled.div`
    position: relative;
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

const CurrencyUnitContainer = styled.div`
    display: flex;
    gap: 16px;
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

const CurrencyDropDownContainer = styled.div`
    border: 2px solid #FFE3FD;
    border-radius: 37px;
    padding: 28px 47px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    background-color: #020202;
    gap: 14px;
    transition: all linear 0.2s;
    position: absolute;
    margin-top: 3px;
`