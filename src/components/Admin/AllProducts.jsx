// AllProduct.jsx
import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete, AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct } from "../../redux/actions/product";

const AllProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1.5 },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "stock", headerName: "Stock", flex: 1 },
    { field: "sold", headerName: "Sold", flex: 1 },
    {
      field: "preview",
      headerName: "Preview",
      flex: 1,
      renderCell: (params) => (
        <button
          className="text-indigo-600 hover:text-indigo-800"
          onClick={() => openModal(params.row.product)}
        >
          <AiOutlineEye size={20} />
        </button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => (
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => handleDelete(params.row.id)}
        >
          <AiOutlineDelete size={20} />
        </button>
      ),
    },
  ];

  const rows =
    products &&
    products.map((item) => ({
      id: item._id,
      name: item.name,
      price: "₹" + item.discountPrice,
      stock: item.stock,
      sold: item.sold,
      product: item,
    }));

  return (
<<<<<<< Updated upstream
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="bg-white rounded-xl shadow-md">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>

      {/* Preview Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full border border-white/20">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <AiOutlineEye className="text-white" size={24} />
                    </div>
                    Product Preview
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-white/80 hover:text-white focus:outline-none transition-all duration-200 p-2 hover:bg-white/20 rounded-xl"
                  >
                    <AiOutlineClose size={24} />
                  </button>
=======
    <div className="w-full p-4 sm:p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-10 gap-2 sm:gap-4">
        <div className="relative">
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="relative">
              <div className="p-2 sm:p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl shadow-2xl">
                <span className="text-2xl sm:text-5xl filter drop-shadow-lg">📦</span>
              </div>
              <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg"></div>
            </div>
          </div>
          <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-12 sm:w-24 h-12 sm:h-24 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        </div>
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
          <div className="relative flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-[300px] pl-10 sm:pl-12 pr-3 sm:pr-6 py-2 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg text-sm sm:text-base"
            />
            <FiSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
          <div className="relative w-full sm:w-auto">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full min-h-[70vh] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-bl from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl hidden xs:block"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-tr from-pink-100/30 to-blue-100/30 rounded-full blur-3xl hidden xs:block"></div>
        
        {isLoading ? (
          <Loader />
        ) : filteredProducts?.length === 0 ? (
          <div className="w-full min-h-[180px] flex items-center justify-center py-8 sm:py-16">
            <div className="text-center w-full">
              <AiOutlineShopping className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600 text-base sm:text-lg">No products found</p>
              <button
                onClick={handleCreate}
                className="mt-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <AiOutlinePlus size={18} />
                <span>Create Your First Product</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full relative z-10 overflow-x-auto">
            <div className="min-w-[600px] sm:min-w-0">
              <DataGrid
                rows={filteredProducts}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight
                className="!border-none"
                getRowHeight={() => (window.innerWidth < 640 ? 60 : 'auto')}
                rowHeight={window.innerWidth < 640 ? 60 : 90}
                componentsProps={{
                  footer: {
                    sx: {
                      position: 'relative',
                      overflow: 'visible'
                    }
                  },
                  panel: {
                    sx: {
                      overflow: 'visible'
                    }
                  }
                }}
                sx={{
                  '& .MuiDataGrid-root': {
                    border: 'none !important',
                    background: 'transparent !important',
                    borderRadius: '20px !important',
                    overflow: 'hidden !important'
                  },
                  '& .MuiDataGrid-main': {
                    overflow: 'visible !important'
                  },
                  '& .MuiDataGrid-virtualScroller': {
                    marginTop: '8px !important',
                    overflow: 'visible !important'
                  },
                  '& .MuiDataGrid-virtualScrollerContent': {
                    padding: '0 12px !important',
                    overflow: 'visible !important'
                  },
                  '& .MuiDataGrid-virtualScrollerRenderZone': {
                    transform: 'none !important',
                    position: 'relative !important',
                    overflow: 'visible !important'
                  },
                  '& .MuiDataGrid-footerContainer': {
                    position: 'relative !important',
                    overflow: 'visible !important',
                    marginTop: '20px !important',
                    background: 'transparent !important',
                    borderTop: '1px solid rgba(226, 232, 240, 0.5) !important'
                  },
                  '& .MuiDataGrid-panel': {
                    overflow: 'visible !important'
                  },
                  '& .MuiDataGrid-panelContent': {
                    overflow: 'visible !important'
                  },
                  '& .MuiDataGrid-cell': {
                    display: 'flex !important',
                    alignItems: 'center !important',
                    justifyContent: 'flex-start !important',
                    padding: window.innerWidth < 640 ? '10px 8px !important' : '20px 24px !important',
                    height: '100% !important',
                    minHeight: window.innerWidth < 640 ? '60px !important' : '90px !important',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.3) !important',
                    overflow: 'visible !important',
                    background: 'transparent !important',
                    transition: 'all 0.3s ease !important'
                  },
                  '& .MuiDataGrid-cell:hover': {
                    background: 'rgba(255, 255, 255, 0.1) !important',
                    transform: 'translateY(-1px) !important'
                  },
                  '& .MuiDataGrid-columnHeader': {
                    padding: window.innerWidth < 640 ? '10px !important' : '24px !important',
                    height: 'auto !important',
                    minHeight: window.innerWidth < 640 ? '40px !important' : '80px !important',
                    alignItems: 'center !important',
                    whiteSpace: 'normal !important',
                    background: 'transparent !important',
                    borderBottom: '2px solid rgba(79, 70, 229, 0.2) !important',
                    overflow: 'visible !important'
                  },
                  '& .MuiDataGrid-columnHeaderTitle': {
                    fontWeight: '800 !important',
                    color: '#1e293b !important',
                    whiteSpace: 'normal !important',
                    lineHeight: '1.3 !important',
                    display: 'flex !important',
                    alignItems: 'center !important',
                    textTransform: 'uppercase !important',
                    fontSize: window.innerWidth < 640 ? '0.75rem !important' : '0.85rem !important',
                    letterSpacing: '0.1em !important',
                    height: 'auto !important',
                    minHeight: '40px !important',
                    overflow: 'visible !important',
                    textOverflow: 'unset !important'
                  },
                  '& .MuiDataGrid-columnHeaders': {
                    background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%) !important',
                    borderBottom: '2px solid rgba(79, 70, 229, 0.2) !important',
                    overflow: 'visible !important',
                    backdropFilter: 'blur(10px) !important'
                  },
                  '& .MuiDataGrid-row': {
                    minHeight: window.innerWidth < 640 ? '60px !important' : '90px !important',
                    marginBottom: '4px !important',
                    overflow: 'visible !important',
                    borderRadius: '12px !important',
                    transition: 'all 0.3s ease !important'
                  },
                  '& .MuiDataGrid-row:hover': {
                    background: 'rgba(255, 255, 255, 0.9) !important',
                    transform: 'translateY(-2px) !important',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1) !important'
                  },
                  '& .MuiDataGrid-virtualScrollerContent': {
                    overflow: 'visible !important'
                  },
                  '& .MuiDataGrid-virtualScrollerRenderZone': {
                    overflow: 'visible !important'
                  },
                  '& .MuiTablePagination-root': {
                    color: '#64748b !important',
                    fontWeight: '600 !important'
                  },
                  '& .MuiTablePagination-selectIcon': {
                    color: '#6366f1 !important'
                  },
                  '& .MuiIconButton-root': {
                    color: '#6366f1 !important',
                    transition: 'all 0.3s ease !important'
                  },
                  '& .MuiIconButton-root:hover': {
                    background: 'rgba(99, 102, 241, 0.1) !important',
                    transform: 'scale(1.1) !important'
                  }
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Product Preview Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-2 sm:px-0">
          <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-lg sm:max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Product Details</h2>
                <button
                  onClick={closeModal}
                  className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <AiOutlineClose size={20} />
                </button>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6">
                {/* Product Images */}
                <div className="space-y-2 sm:space-y-4">
                  <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={selectedProduct.images[0]}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-1 sm:gap-2">
                    {selectedProduct.images.slice(1).map((image, index) => (
                      <div key={index} className="aspect-square rounded-md sm:rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={image}
                          alt={`${selectedProduct.name} ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
>>>>>>> Stashed changes
                </div>
              </div>

<<<<<<< Updated upstream
              <div className="bg-white px-6 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl">
                      <img
                        src={selectedProduct.images[0]}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {selectedProduct.images.slice(1).map((image, index) => (
                        <div key={index} className="relative w-full h-24 rounded-xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                          <img
                            src={image}
                            alt={`${selectedProduct.name} ${index + 2}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/100";
                            }}
                          />
=======
                {/* Product Information */}
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{selectedProduct.name}</h3>
                    <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium">
                        {selectedProduct.category}
                      </div>
                      {selectedProduct.subcategory && (
                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium">
                          {selectedProduct.subcategory}
>>>>>>> Stashed changes
                        </div>
                      ))}
                    </div>
                  </div>

<<<<<<< Updated upstream
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="text-3xl font-bold text-gray-900 leading-tight">{selectedProduct.name}</h4>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-xl font-semibold text-sm shadow-sm">
                        {typeof selectedProduct.category === 'object' ? selectedProduct.category.name : selectedProduct.category}
                      </div>
                    </div>

                    <div className="space-y-4 bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-inner">
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Original Price:</span>
                        <span className="text-gray-500 line-through text-lg font-semibold">₹{selectedProduct.originalPrice}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Discount Price:</span>
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-lg">
                          <span className="text-xl font-bold">₹{selectedProduct.discountPrice}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Stock:</span>
                        <div className={`px-4 py-2 rounded-xl font-semibold shadow-sm ${
                          selectedProduct.stock > 0 
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700' 
                            : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700'
                        }`}>
                          {selectedProduct.stock > 0 ? `${selectedProduct.stock} units` : 'Out of Stock'}
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600 font-medium">Total Sold:</span>
                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-xl font-semibold shadow-sm">
                          {selectedProduct.sold} units
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-lg font-bold text-gray-900">Description</h5>
                      <p className="text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {selectedProduct.tags && (
                      <div className="space-y-3">
                        <h5 className="text-lg font-bold text-gray-900">Tags</h5>
                        <div className="flex flex-wrap gap-2">
                          {(typeof selectedProduct.tags === 'string' 
                            ? selectedProduct.tags.split(',').map(tag => tag.trim())
                            : Array.isArray(selectedProduct.tags) 
                              ? selectedProduct.tags 
                              : []
                          ).map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 text-sm font-semibold text-blue-600 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                            >
                              #{tag}
=======
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-xs sm:text-base">Original Price:</span>
                      <div className="text-gray-500 line-through text-xs sm:text-base">₹{selectedProduct.originalPrice}</div>
                    </div>
                    <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-xs sm:text-base">Discount Price:</span>
                      <div className="text-green-600 font-bold text-xs sm:text-base">₹{selectedProduct.discountPrice}</div>
                    </div>
                    <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-xs sm:text-base">Stock:</span>
                      <div className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl font-semibold shadow-sm ${
                        selectedProduct.Stock > 0 
                          ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700' 
                          : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700'
                      }`}>
                        {selectedProduct.Stock > 0 ? `${selectedProduct.Stock} units` : 'Out of Stock'}
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-xs sm:text-base">Total Sold:</span>
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl font-semibold shadow-sm">
                        {selectedProduct.sold} units
                      </div>
                    </div>
                    {selectedProduct.unit && (
                      <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium text-xs sm:text-base">Unit:</span>
                        <div className="text-gray-800 font-medium text-xs sm:text-base">{selectedProduct.unit}</div>
                      </div>
                    )}
                    {selectedProduct.maxPurchaseQuantity && (
                      <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium text-xs sm:text-base">Max Purchase Quantity:</span>
                        <div className="text-gray-800 font-medium text-xs sm:text-base">{selectedProduct.maxPurchaseQuantity}</div>
                      </div>
                    )}
                    {selectedProduct.tags && selectedProduct.tags.length > 0 && (
                      <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium text-xs sm:text-base">Tags:</span>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {selectedProduct.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                              {tag}
>>>>>>> Stashed changes
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
<<<<<<< Updated upstream
=======

                  {selectedProduct.shop && (
                    <div className="mt-2 sm:mt-4 p-2 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                      <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Shop Information</h4>
                      <div className="flex items-center gap-2 sm:gap-3">
                        {selectedProduct.shop.avatar && (
                          <img
                            src={selectedProduct.shop.avatar}
                            alt={selectedProduct.shop.name}
                            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover"
                          />
                        )}
                        <div>
                          <div className="font-medium text-gray-800 text-xs sm:text-base">{selectedProduct.shop.name}</div>
                          {selectedProduct.shop.ratings && (
                            <div className="text-xs sm:text-sm text-gray-600">
                              Rating: {selectedProduct.shop.ratings.toFixed(1)} ⭐
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-2 sm:mt-4">
                    <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Description</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
>>>>>>> Stashed changes
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-transparent shadow-lg px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-base font-semibold text-white hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 hover:scale-105"
                  onClick={closeModal}
                >
                  <AiOutlineClose size={18} />
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProduct;
