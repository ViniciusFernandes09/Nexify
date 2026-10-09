import "./styles.css";
import * as productService from '../../../services/product-service'
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import DialogInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";
import ButtonInverse from "../../../components/ButtonInverse";
import { useNavigate } from "react-router-dom";

type QueryParams = {
    page: number;
    name: string;
}

export default function ProductListing() {

    const navigate = useNavigate();

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com sucesso!"
    });

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        id: 0,
        visible: false,
        message: "Tem certeza?"
    });

    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParam] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    useEffect(() => {
        productService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
            const nextPage = response.data.content;
            setProducts(products.concat(nextPage));
            setIsLastPage(response.data.last);
            });
        }, [queryParams]);

    function handleNewProductClick() {
            navigate("/admin/products/create");
    }

    function handleSearch(searchText: string) {
        setProducts([]);
        setQueryParam({ ...queryParams, page: 0, name: searchText });
    }

    function handleNextPageClick () {
        setQueryParam({...queryParams, page: queryParams.page + 1});
    }

    function handleDialogInfoClose() {
        setDialogInfoData({...dialogConfirmationData, visible: false});
    }

    function handleDeleteClick(productId: number) {
        setDialogConfirmationData({...dialogConfirmationData, id: productId, visible: true});
    }

    function handleDialogConfirmationAnsware(answer: boolean, productId: number) {
        if (answer) {
            productService.deleteById(productId)
                .then(() => {
                    setProducts([]);
                    setQueryParam({ ...queryParams, page: 0});
                })
                .catch(error => {
                    setDialogInfoData({
                        visible: true,
                        message: error.response.data.error
                    })
                });
        }

        setDialogConfirmationData({...dialogConfirmationData, visible: false});
    }

    return (
        <main>
            <section id="product-listing-section" className="nxf-container">
                <h2 className="nxf-section-title nxf-mb20">Cadastro de produtos</h2>

                <div className="nxf-btn-page-container nxf-mb20">
                    <div onClick={handleNewProductClick}>
                        <ButtonInverse text="Novo" />
                    </div>
                </div>

                <SearchBar onSearch={handleSearch}/>

                <table className="nxf-table nxf-mb20 nxf-mt20">
                    <thead>
                        <tr>
                            <th className="nxf-tb576">ID</th>
                            <th></th>
                            <th className="nxf-tb768">Preço</th>
                            <th className="nxf-txt-left">Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <td className="nxf-tb576">{product.id}</td>
                            <td><img className="nxf-product-listing-image" src={product.imgUrl} alt={product.name} /></td>
                            <td className="nxf-tb768">R$ {product.price.toFixed(2)}</td>
                            <td className="nxf-txt-left">{product.name}</td>
                            <td><img className="nxf-product-listing-btn" src={editIcon} alt="Editar" /></td>
                            <td><img onClick={() => handleDeleteClick(product.id)} className="nxf-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            {
                !isLastPage &&
                <div onClick={handleNextPageClick}>
                <ButtonNextPage />
                </div>
            }
            </section>

            {
                dialogInfoData.visible &&
                <DialogInfo message={dialogInfoData.message} onDialogClose={handleDialogInfoClose} />
            }

            {
                dialogConfirmationData.visible &&
                <DialogConfirmation id={dialogConfirmationData.id} message={dialogConfirmationData.message} onDialogAnswer={handleDialogConfirmationAnsware} />
            }
        </main>
    );
}
