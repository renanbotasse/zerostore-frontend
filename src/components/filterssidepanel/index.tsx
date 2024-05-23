import {
    SfAccordionItem,
    SfButton,
    SfCounter,
    SfChip,
    SfIconClose,
    SfIconChevronLeft,
    SfIconArrowBack,
    SfIconCheck,
    SfListItem,
    SfThumbnail,
    SfRadio,
    SfSelect,
    SfCheckbox,
} from '@storefront-ui/react';
import { Fragment, useState, useEffect } from 'react';
import classNames from 'classnames';
import FilterCard from '../filtercard/index';  // Importe o componente SalesCard
import Footer from '../footer/index'

const sortOptions = [
    { id: 'sort1', label: 'Relevance', value: 'relevance' },
    { id: 'sort2', label: 'Price: Low to High', value: 'price low to high' },
    { id: 'sort3', label: 'Price: High to Low', value: 'price high to low' },
    { id: 'sort6', label: 'Bestsellers', value: 'bestsellers' },
];

type FilterDetail = {
    id: string;
    label: string;
    value: string;
    link?: string;
};

type Node = {
    id: string;
    summary: string;
    type: string;
    details: FilterDetail[];
};

const filtersData: Node[] = [
    {
        id: 'acc2',
        summary: 'Category',
        type: 'category',
        details: [
            {
                id: 'console',
                label: 'Consoles',
                value: 'console'
            },
            {
                id: 'videgame',
                label: 'Video Games',
                value: 'game',
            },
            {
                id: 'accessories',
                label: 'Accessories',
                value: 'accessories',
            },
        ],
    },
    {
        id: 'acc4',
        summary: 'Platform',
        type: 'checkbox',
        details: [
            { id: 'platform1', label: 'HomeBrew', value: 'HOME' },
            { id: 'platform2', label: 'Super Nintendo', value: 'SNES' },
            { id: 'platform3', label: 'Nintendo', value: 'NES' },
            { id: 'platform4', label: 'Mega Drive', value: 'MEGA' },
            { id: 'platform5', label: 'Master System', value: 'MASTER' },
            { id: 'platform6', label: 'Playstation One', value: 'PSX' },
            { id: 'platform7', label: 'Nintendo 64', value: 'N64' },
            { id: 'platform8', label: 'Ayneo', value: 'AYNEO' },
        ],
    },
    {
        id: 'acc5',
        summary: 'Status',
        type: 'checkbox',
        details: [
            { id: 'status1', label: 'Sales', value: 'sales' },
            { id: 'status2', label: 'New', value: 'new' }
        ],
    },
];

export default function FiltersSidepanel() {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [allproducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [opened, setOpened] = useState<string[]>(filtersData.map((item) => item.id));

    const isAccordionItemOpen = (id: string) => opened.includes(id);
    const isFilterSelected = (selectedValue: string) => selectedFilters.includes(selectedValue);

    const fetchFilteredProducts = () => {
        const url = 'http://localhost:3000/products';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAllProducts(data);
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    const handleFilterSelection = (selectedValue: string) => {
        if (selectedFilters.includes(selectedValue)) {
            setSelectedFilters(selectedFilters.filter((value) => value !== selectedValue));
        } else {
            setSelectedFilters([...selectedFilters, selectedValue]);
        }
    };

    const handleCategorySelection = (category: string) => {
        setSelectedCategory(category);
    };

    const handleToggle = (id: string) => (open: boolean) => {
        if (open) {
            setOpened((current) => [...current, id]);
        } else {
            setOpened((current) => current.filter((item) => item !== id));
        }
    };

    const handleClearFilters = () => {
        setSelectedFilters([]);
        setSelectedCategory(null);
        fetchFilteredProducts();
    };

    const applyFilters = () => {
        const filterData = allproducts;
        const filterFilters = selectedFilters;
        const filterCategory = selectedCategory;

        const filteredByCategory = filterCategory
            ? filterData.filter(product => product.product_type === filterCategory)
            : filterData;

        const finalFilteredProducts = filteredByCategory.filter(product => {
            return filterFilters.length === 0 || filterFilters.includes(product.product_platform);
        });

        setProducts(finalFilteredProducts);
    };

    useEffect(() => {
        fetchFilteredProducts();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [selectedFilters, selectedCategory]);

    return (
        <>
        <div className="flex">
            <aside className="min-w-[350px] max-w-[350px]  md:max-w-[350px]">
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
                            onToggle={handleToggle(section.id)}
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
                                            'font-bold bg-gray-100 hover:bg-gray-100': isFilterSelected(value),
                                        })}
                                        slotPrefix={
                                            <SfCheckbox
                                                className="flex items-center"
                                                value={value}
                                                checked={isFilterSelected(value)}
                                                onChange={(event) => {
                                                    handleFilterSelection(event.target.value);
                                                }}
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
                    <SfButton className="w-full bg-red-950 hover:bg-red-950 active:bg-red-900 hover:font-bold">Apply Filters</SfButton>
                </div>
                <Footer/>
            </aside>
            <FilterCard products={products} />

        </div>


    
    </>
);
}
