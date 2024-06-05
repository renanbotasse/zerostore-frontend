import {
    SfIconExpandMore,
    SfIconClose,
    SfButton,
    SfDrawer,
    SfListItem,
    useDisclosure,
    useTrapFocus,
    SfInput,
    SfIconSearch,
    SfIconMenu,
} from '@storefront-ui/react';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { CSSTransition } from 'react-transition-group';
import zerologoLong from '../../assets/zerologo2.png';
import { useDispatch } from 'react-redux';
import { filterRedux } from '../../store/slices/filtersSlice/index'; // Importe a ação do slice de Redux
import { useNavigate } from 'react-router-dom';
import { actionItems, bannerDetails, categoriesContent } from './navBarTopData'
import { productRedux } from '../../store/slices/productSlice/index'; 

export default function SearchNavBarTop() {
    const { close, toggle, isOpen } = useDisclosure();
    const drawerRef = useRef(null);
    const menuRef = useRef(null);
    const [inputValue, setInputValue] = useState('');


    useTrapFocus(drawerRef, {
        activeState: isOpen,
        arrowKeysUpDown: true,
        initialFocus: 'container',
    });
    useClickAway(menuRef, () => {
        close();
    });

    const search = (event) => {
        dispatch(productRedux({
            product_name: inputValue
        }));
        console.log(inputValue)
    };

    const dispatch = useDispatch();
    const navigateTo = useNavigate(); // 

    const handleFilterClick = (filterData) => {
        // Verifica se filterRedux está presente em filterData
        if (filterData.filterRedux) {
            dispatch(filterRedux({ // Use a ação do slice de Redux
                product_platform: filterData.filterRedux.product_platform || null,
                product_sales: filterData.filterRedux.product_sales || null,
                product_new: filterData.filterRedux.product_new || null,
                product_type: filterData.filterRedux.product_type || null
            }));
        } else {
            // Se filterRedux não estiver presente, defina todos os valores como null
            dispatch(filterRedux({
                product_platform: null,
                product_sales: null,
                product_new: null,
                product_type: null
            }));
        }
        // Update the URL without using useHistory
        navigateTo(`${filterData.link}`);
    };

    return (
        <div className="w-full fixed z-[10]">
            {isOpen && <div className="fixed inset-0 bg-[#8c790048] bg-opacity-50 z-[9] transition-opacity" />}
            <header
                ref={menuRef}
                className="flex flex-wrap md:flex-nowrap justify-center w-full py-2 md:py-5 border-0 bg-[#8a202b] border-neutral-200 md:relative md:z-10"
            >
                <div className="flex items-center justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
                    <SfButton
                        className="block md:hidden text-white bg-transparent font-body hover:bg-[#8c000f] hover:text-white active:bg-primary-900 active:text-white"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        variant="tertiary"
                        onClick={toggle}
                        square
                    >
                        <SfIconMenu className=" text-white" />
                    </SfButton>
                    <a
                        href="/"
                        aria-label="SF Homepage"
                        className="flex shrink-0 ml-4 md:ml-0 mr-2 md:mr-10 text-white focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                    >
                        <picture>
                            <source srcSet={zerologoLong} media="(min-width: 1024px)" />
                            <img
                                src={zerologoLong}
                                alt="Sf Logo"
                                className="w-8 h-8 lg:w-[7rem] lg:h-[3rem]"
                            />
                        </picture>
                    </a>
                    <SfButton
                        className="hidden md:flex text-white bg-transparent font-body hover:bg-white hover:text-black active:bg-white active:text-black"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        slotSuffix={<SfIconExpandMore className="hidden md:inline-flex" />}
                        variant="tertiary"
                        onClick={toggle}
                        square
                    >
                        <span className="hidden md:inline-flex whitespace-nowrap px-2 ">Browse products</span>
                    </SfButton>
                    <nav>
                        <ul>
                            <li role="none">
                                <CSSTransition
                                    in={isOpen}
                                    timeout={500}
                                    unmountOnExit
                                    classNames={{
                                        enter: '-translate-x-full md:opacity-0 md:translate-x-0',
                                        enterActive: 'translate-x-0 md:opacity-100 transition duration-500 ease-in-out',
                                        exitActive: '-translate-x-full md:opacity-0 md:translate-x-0 transition duration-500 ease-in-out',
                                    }}
                                >
                                    <SfDrawer
                                        ref={drawerRef}
                                        open
                                        disableClickAway
                                        placement="top"
                                        className="grid grid-cols-1 md:gap-x-1 md:grid-cols-5 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-20 max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
                                    >
                                        <div className="sticky top-0 flex items-center justify-between px-4 py-2 md:hidden bg-[#8c000f]">
                                            <div className="flex items-center font-medium text-white typography-text-lg">Browse products</div>
                                            <SfButton
                                                square
                                                variant="tertiary"
                                                aria-label="Close navigation menu"
                                                onClick={close}
                                                className="text-white ml-2"
                                            >
                                                <SfIconClose />
                                            </SfButton>
                                        </div>
                                        {categoriesContent.map(({ heading, items }) => (
                                            <div key={heading} className="[&:nth-child(2)]:pt-0 pt-6 md:pt-0">
                                                <h2
                                                    role="presentation"
                                                    className="typography-text-base font-bold text-neutral-900 whitespace-nowrap p-4 md:py-1.5 items-center"
                                                >
                                                    {heading}
                                                </h2>
                                                <hr className="mb-3.5" />
                                                <ul>
                                                    {items.map((item) => (
                                                        <li key={item.title} className="flex col-auto items-center hover:bg-red-800 hover:text-white">
                                                            <img
                                                                src={item.icon}
                                                                alt="Sf Logo"
                                                                className="flex w-8 h-8 lg:w-[1.75rem] lg:h-[1.75rem] hover:bg-red-800 hover:text-white"
                                                            />
                                                            <SfListItem
                                                                as="a"
                                                                size="sm"
                                                                role="none"
                                                                onClick={() => handleFilterClick(item)}
                                                                className="items-center py-4 md:py-2 hover:bg-red-800 hover:text-white font-bold"
                                                            >
                                                                {item.title}
                                                            </SfListItem>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        <div className="flex flex-col items-center overflow-hidden">
                                            <img src={bannerDetails.image} alt={bannerDetails.title} className="absolute h-[250px] z-[1] object-cover" />
                                            <p className="px-4 mt-4 mb-4 font-medium text-center typography-text-base z-[2]">
                                                {bannerDetails.title}
                                            </p>
                                        </div>
                                        <SfButton
                                            square
                                            size="sm"
                                            variant="tertiary"
                                            aria-label="Close navigation menu"
                                            onClick={close}
                                            className="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                                        >
                                            <SfIconClose className="text-neutral-500" />
                                        </SfButton>
                                    </SfDrawer>
                                </CSSTransition>
                            </li>
                        </ul>
                    </nav>
                    <form role="search" className="hidden md:flex flex-[100%] ml-10" onSubmit={search}>
                        <SfInput
                            value={inputValue}
                            type="search"
                            className="[&::-webkit-search-cancel-button]:appearance-none"
                            placeholder="Search"
                            wrapperClassName="flex-1 h-10 pr-0"
                            size="base"
                            slotSuffix={
                                <span className="flex items-center">
                                    <SfButton
                                        variant="tertiary"
                                        square
                                        aria-label="search"
                                        type="submit"
                                        className="rounded-l-none hover:bg-[#8c000f] active:bg-transparent"
                                    >
                                        <SfIconSearch className="text-black" />
                                    </SfButton>
                                </span>
                            }
                            onChange={(event) => setInputValue(event.target.value)}
                        />
                    </form>
                    <nav className="flex-1 flex flex-nowrap justify-end items-center md:ml-10 gap-x-1" aria-label="SF Navigation">
                        {actionItems.map((actionItem) => (
                            <SfButton
                                className="text-white bg-transparent hover:bg-white hover:text-black active:bg-white active:text-black"
                                key={actionItem.ariaLabel}
                                aria-label={actionItem.ariaLabel}
                                variant="tertiary"
                                slotPrefix={actionItem.icon}
                                square
                            >
                                {actionItem.role === 'login' && (
                                    <p className="hidden lg:inline-flex whitespace-nowrap pr-2">{actionItem.label}</p>
                                )}
                            </SfButton>
                        ))}
                    </nav>
                </div>
                <form role="search" className="flex md:hidden flex-[100%] my-2 mx-4" onSubmit={search}>
                    <SfInput
                        value={inputValue}
                        type="search"
                        className="[&::-webkit-search-cancel-button]:appearance-none"
                        placeholder="Search"
                        wrapperClassName="flex-1 h-10 pr-0"
                        size="base"
                        slotSuffix={
                            <span className="flex items-center">
                                <SfButton
                                    variant="tertiary"
                                    square
                                    aria-label="search"
                                    type="submit"
                                    className="rounded-l-none hover:bg-transparent active:bg-transparent"
                                >
                                    <SfIconSearch className="text-black" />
                                </SfButton>
                            </span>
                        }
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                </form>
            </header>
        </div>
    );
}
