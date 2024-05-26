import FilterCard from '../filtercard/index.tsx';
import Footer from '../footer/index.js';

import { Fragment, useState, useEffect } from 'react';
import {
    SfAccordionItem,
    SfButton,
    SfCheckbox,
    SfIconCheck,
    SfIconChevronLeft,
    SfIconClose,
    SfListItem,
    SfSelect
} from '@storefront-ui/react';
import classNames from 'classnames';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../store/reducers.js';
import { filterRedux } from '../../store/slices/filtersSlice/index.js';

// FILTERS DATA
import { sortOptions, filtersData, FilterPageInitialState } from './filtersData';

export default function FiltersSidepanel() {
    // LÓGICA - REDUX
    const dispatch = useDispatch();
    const filterState = useSelector((state: rootState) => state.filterRedux);

    // CARREGAR PRODUTOS INICIAL
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);

    // OBJETO INICIAL QUE VAI APARECER
    const filterInitialState: FilterPageInitialState = {
        product_platform: filterState.product_platform || null,
        product_type: filterState.product_type || null,
        product_new: filterState.product_new || null,
        product_sales: filterState.product_sales || null,
    };

    // DISPLAY PRODUTOS
    useEffect(() => {
        fetchFilteredProducts();
    }, []);

    // LOGICA - REQUEST
    const fetchFilteredProducts = () => {
        const baseUrl = 'http://localhost:3000/products';
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                setAllProducts(data);
                applyFilters(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    // SELEÇÃO DE CATEGORIAS, FILTROS E STATUS
    const [selectedCategory, setSelectedCategory] = useState<string | null>(filterInitialState.product_type);
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(filterInitialState.product_platform);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleCategorySelection = (category: string) => {
        setSelectedCategory(category);
    };

    const handlePlatformSelection = (platform: string) => {
        setSelectedPlatform(platform === selectedPlatform ? null : platform);
    };

    // LIMPEZA DOS FILTROS
    const handleClearFilters = () => {
        setSelectedPlatform(null);
        setSelectedCategory(null);
        fetchFilteredProducts();
    };

    // FILTROS ATUALIZAM REDUX
    const applyFilters = (data = allProducts) => {
        const filterCategory = selectedCategory;
        const filterPlatform = selectedPlatform;
    
        dispatch(filterRedux({
            product_platform: selectedPlatform || null,
            product_type: selectedCategory || null
        }));
    
        const finalFilteredProducts = data.filter((product: any) => {
            // Se não houver categoria selecionada, todos os produtos serão incluídos
            const passCategoryFilter = !filterCategory || product.product_type === filterCategory;
    
            // Se não houver plataforma selecionada, todos os produtos serão incluídos
            const passPlatformFilter = !filterPlatform || product.product_platform === filterPlatform;
    
            return passCategoryFilter && passPlatformFilter;
        });
        setProducts(finalFilteredProducts);
    };

    // Declaração do estado para controlar as abas abertas
    const [openedTabs, setOpenedTabs] = useState<string[]>(filtersData.map((item) => item.id));

    // Função para verificar se uma aba está aberta
    const isAccordionItemOpen = (id: string) => openedTabs.includes(id);

    // Função para lidar com a abertura e fechamento das abas
    const handleToggle = (id: string, open: boolean) => {
        setOpenedTabs((prevOpened) => {
            if (open) {
                // Se a aba está sendo aberta, adicionamos o ID à lista de abas abertas
                return [...prevOpened, id];
            } else {
                // Se a aba está sendo fechada, removemos o ID da lista de abas abertas
                return prevOpened.filter((openedId) => openedId !== id);
            }
        });
    };

    // ATUALIZA PAGINA COM BASE NO REDUX
    useEffect(() => {
        applyFilters();
    }, [selectedPlatform, selectedCategory]);

    return (
        <>
            <div className="flex">
                <aside className="min-w-[350px] max-w-[350px] md:max-w-[350px]">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="px-2 font-bold typography-headline-4">List settings</h4>
                        <button type="button" className="sm:hidden text-gray-100" aria-label="Close filters panel">
                            <SfIconClose />
                        </button>
                    </div>
                    <h5 className="py-2 px-4 mt-16 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
                        Sort by
                    </h5>
                    <div className="px-2">
                        <SfSelect aria-label="Sorting">
                            {sortOptions.map((option) => (
                                <option value={option.value} key={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </SfSelect>
                    </div>
                    <h5 className="py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
                        Filter
                    </h5>
                    {filtersData.map((section) => (
                        <Fragment key={section.id}>
                            <SfAccordionItem
                                onToggle={(open) => handleToggle(section.id, open)}
                                open={isAccordionItemOpen(section.id)}
                                summary={
                                    <div className="flex justify-between p-2 mb-2">
                                        <p className="mb-2 font-medium typography-headline-5">{section.summary}</p>
                                        <SfIconChevronLeft
                                            className={classNames(
                                                'text-neutral-500',
                                                `${isAccordionItemOpen(section.id) ? 'rotate-90' : '-rotate-90'}`,
                                            )}
                                        />
                                    </div>
                                }
                            >
                                {section.type === 'category' && (
                                    <ul className="mt-2 mb-6">
                                        {section.details.map(({ id, label, value }) => (
                                            <li key={id}>
                                                <SfListItem
                                                    size="lg"
                                                    as="a"
                                                    onClick={() => handleCategorySelection(value)}
                                                    className={classNames('first-of-type:mt-2 rounded-md active:bg-primary-100', {
                                                        'bg-gray-100 hover:bg-gray-100 font-bold': selectedCategory === value,
                                                    })}
                                                    slotSuffix={selectedCategory === value && <SfIconCheck size="sm" className="text-primary-700" />}
                                                >
                                                    <span className="flex items-center">
                                                        {label}
                                                    </span>
                                                </SfListItem>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {section.type === 'checkbox' &&
                                    section.details.map(({ label, value }) => (
                                        <SfListItem
                                            key={value}
                                            as="label"
                                            size="base"
                                            className={classNames('px-1.5 mt-1 rounded-md bg-transparent active:bg-transparent hover:bg-transparent', {
                                                'font-bold bg-gray-100 hover:bg-gray-100': selectedPlatform === value,
                                            })}
                                            slotPrefix={
                                                <SfCheckbox
                                                    className="flex items-center"
                                                    value={value}
                                                    checked={selectedPlatform === value}
                                                    onChange={() => handlePlatformSelection(value)}
                                                />
                                            }
                                        >
                                            <p>
                                                <span className="mr-2 text-sm">{label}</span>
                                            </p>
                                        </SfListItem>
                                    ))}
                            </SfAccordionItem>
                            <hr className="my-4" />
                        </Fragment>
                    ))}
                    <div className="flex justify-between mb-5">
                        <SfButton className="w-full bg-red-950 hover:bg-red-950 active:bg-red-900 hover:font-bold mr-3" onClick={handleClearFilters}>
                            Clear Filters
                        </SfButton>
                        <SfButton className="w-full bg-red-950 hover:bg-red-950 active:bg-red-900 hover:font-bold" onClick={applyFilters}>
                            Apply Filters
                        </SfButton>
                    </div>
                    <Footer />
                </aside>
                <FilterCard products={products} />
            </div>
        </>
    );
}
