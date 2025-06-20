import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineCalendar, AiOutlineDollar, AiOutlineStock, AiOutlineFire, AiOutlineGift, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllEventsAdmin } from "../../redux/actions/event";
import { getAllCategories } from "../../redux/actions/category";
import Loader from "../Layout/Loader";
import { toast } from "react-toastify";

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
  
  .animate-scaleIn {
    animation: scaleIn 0.3s ease-out;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const AllEvents = () => {
  const dispatch = useDispatch();
  const { allEvents, isLoading } = useSelector((state) => state.events);
  const { categories } = useSelector((state) => state.category);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add date formatting function
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    dispatch(getAllEventsAdmin());
    dispatch(getAllCategories());
  }, [dispatch]);

  const handlePreview = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Function to format currency in Indian format
  const formatIndianCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(amount);
  };

  const columns = [
    {
      field: "id",
      headerName: "Event ID",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center gap-3 w-full">
          <div className="p-2.5 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex-shrink-0 shadow-sm">
            <AiOutlineCalendar className="text-indigo-600" size={20} />
          </div>
          <div className="flex flex-col justify-center min-w-[100px]">
            <span className="font-semibold text-gray-800 truncate leading-tight">#{params.value.slice(-6)}</span>
            <span className="text-xs text-gray-500 leading-tight mt-0.5 font-medium">Event ID</span>
          </div>
        </div>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 200,
      flex: 1.5,
      renderCell: (params) => (
        <div className="flex items-center gap-3 w-full">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg ring-2 ring-white">
            <img
              src={params?.row?.images && params.row.images[0] ? (params.row.images[0].url || params.row.images[0]) : "https://via.placeholder.com/50"}
              alt={params.value}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/50";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-center min-w-[120px]">
            <span className="font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200 cursor-pointer truncate leading-tight">{params.value}</span>
            <span className="text-xs text-gray-500 leading-tight mt-0.5 font-medium">Event Name</span>
          </div>
        </div>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-3 py-1.5 rounded-lg font-semibold text-sm shadow-sm border border-purple-200">
            {params.row.category?.name || 'Uncategorized'}
          </div>
        </div>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 130,
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-lg shadow-sm">
            <div className="flex items-center">
              <AiOutlineDollar className="mr-1" size={14} />
              <span className="font-bold text-sm">{params.value}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      field: "stock",
      headerName: "Stock",
      minWidth: 130,
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center">
          <div className={`px-3 py-1.5 rounded-lg font-semibold text-sm shadow-sm ${
            params.value > 0 
              ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border border-green-200' 
              : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border border-red-200'
          }`}>
            {params.value > 0 ? `${params.value} units` : 'Out of Stock'}
          </div>
        </div>
      ),
    },
    {
      field: "sold",
      headerName: "Sold",
      minWidth: 130,
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1.5 rounded-lg font-semibold text-sm shadow-sm border border-blue-200">
            {params.value} sold
          </div>
        </div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 150,
      flex: 0.8,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-start gap-2 w-full">
            <button 
              onClick={() => handlePreview(params.row)}
              className="group flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              title="Preview Event"
            >
              <AiOutlineEye size={18} className="group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        );
      },
    },
  ];

  const row = [];

  allEvents &&
    allEvents.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: formatIndianCurrency(item.discountPrice),
        stock: item.stock,
        sold: item.sold_out,
        images: item.images || [],
        category: item.category,
        startDate: item.startDate,
        endDate: item.endDate,
        ...item
      });
    });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div className="relative">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl">
                <span className="text-5xl filter drop-shadow-lg">🎉</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg"></div>
            </div>
            <div>
              <div className="font-black text-4xl font-Poppins bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent leading-tight">
                All Events
              </div>
              <div className="text-gray-600 text-lg mt-2 font-medium">
                Manage and monitor all promotional events
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {allEvents?.length || 0} events in your platform
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        </div>
        <Link to="/admin-create-event">
          <Button
            variant="contained"
            className="!bg-gradient-to-r !from-indigo-500 !to-purple-600 !text-white hover:!from-indigo-600 hover:!to-purple-700 !transition-all !duration-300 !shadow-xl hover:!shadow-2xl !transform hover:!scale-105 !rounded-xl !px-6 !py-3 !font-semibold"
            startIcon={<AiOutlineGift size={20} />}
          >
            Create New Event
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-full min-h-[70vh] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        
        <style>
          {`
            .MuiDataGrid-root {
              border: none !important;
              background: transparent !important;
              border-radius: 20px !important;
              overflow: hidden !important;
            }
            .MuiDataGrid-main {
              overflow: visible !important;
            }
            .MuiDataGrid-virtualScroller {
              margin-top: 8px !important;
              overflow: visible !important;
            }
            .MuiDataGrid-virtualScrollerContent {
              padding: 0 12px !important;
              overflow: visible !important;
            }
            .MuiDataGrid-virtualScrollerRenderZone {
              transform: none !important;
              position: relative !important;
              overflow: visible !important;
            }
            .MuiDataGrid-footerContainer {
              position: relative !important;
              overflow: visible !important;
              margin-top: 20px !important;
              background: transparent !important;
              border-top: 1px solid rgba(226, 232, 240, 0.5) !important;
            }
            .MuiDataGrid-panel {
              overflow: visible !important;
            }
            .MuiDataGrid-panelContent {
              overflow: visible !important;
            }
            .MuiDataGrid-cell {
              display: flex !important;
              align-items: center !important;
              justify-content: flex-start !important;
              padding: 20px 24px !important;
              height: 100% !important;
              min-height: 90px !important;
              border-bottom: 1px solid rgba(226, 232, 240, 0.3) !important;
              overflow: visible !important;
              background: transparent !important;
              transition: all 0.3s ease !important;
            }
            .MuiDataGrid-cell:hover {
              background: rgba(255, 255, 255, 0.1) !important;
              transform: translateY(-1px) !important;
            }
            .MuiDataGrid-columnHeader {
              padding: 24px !important;
              height: auto !important;
              min-height: 80px !important;
              align-items: center !important;
              white-space: normal !important;
              background: transparent !important;
              border-bottom: 2px solid rgba(79, 70, 229, 0.2) !important;
              overflow: visible !important;
            }
            .MuiDataGrid-columnHeaderTitle {
              font-weight: 800 !important;
              color: #1e293b !important;
              white-space: normal !important;
              line-height: 1.3 !important;
              display: flex !important;
              align-items: center !important;
              text-transform: uppercase !important;
              font-size: 0.85rem !important;
              letter-spacing: 0.1em !important;
              height: auto !important;
              min-height: 40px !important;
              overflow: visible !important;
              text-overflow: unset !important;
            }
            .MuiDataGrid-columnHeaders {
              background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%) !important;
              border-bottom: 2px solid rgba(79, 70, 229, 0.2) !important;
              overflow: visible !important;
              backdrop-filter: blur(10px) !important;
            }
            .MuiDataGrid-row {
              min-height: 90px !important;
              margin-bottom: 4px !important;
              overflow: visible !important;
              border-radius: 12px !important;
              transition: all 0.3s ease !important;
            }
            .MuiDataGrid-row:hover {
              background: rgba(255, 255, 255, 0.9) !important;
              transform: translateY(-2px) !important;
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
            }
            .MuiDataGrid-virtualScrollerContent {
              overflow: visible !important;
            }
            .MuiDataGrid-virtualScrollerRenderZone {
              overflow: visible !important;
            }
            .MuiTablePagination-root {
              color: #64748b !important;
              font-weight: 600 !important;
            }
            .MuiTablePagination-selectIcon {
              color: #6366f1 !important;
            }
            .MuiIconButton-root {
              color: #6366f1 !important;
              transition: all 0.3s ease !important;
            }
            .MuiIconButton-root:hover {
              background: rgba(99, 102, 241, 0.1) !important;
              transform: scale(1.1) !important;
            }
          `}
        </style>

        {allEvents && allEvents.length > 0 ? (
          <div className="w-full relative z-10">
            <DataGrid
              rows={row}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              autoHeight
              className="!border-none"
              getRowHeight={() => 'auto'}
              rowHeight={90}
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
                '& .MuiDataGrid-cell': {
                  overflow: 'visible'
                },
                '& .MuiDataGrid-row': {
                  overflow: 'visible'
                },
                '& .MuiDataGrid-virtualScroller': {
                  overflow: 'visible !important'
                },
                '& .MuiDataGrid-virtualScrollerContent': {
                  overflow: 'visible !important'
                },
                '& .MuiDataGrid-virtualScrollerRenderZone': {
                  overflow: 'visible !important'
                }
              }}
            />
          </div>
        ) : (
          <div className="w-full h-[400px] flex items-center justify-center">
            <div className="text-center">
              <AiOutlineCalendar className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No events found</p>
            </div>
          </div>
        )}
      </div>

      {/* Event Preview Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-scaleIn">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                  <AiOutlineCalendar className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedEvent.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">Event ID: {selectedEvent._id}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 hover:rotate-90"
              >
                <AiOutlineClose size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Event Image Section */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={selectedEvent.images && Array.isArray(selectedEvent.images) && selectedEvent.images.length > 0 ? 
                        (selectedEvent.images[0].url || selectedEvent.images[0]) : 
                        "https://via.placeholder.com/400x300?text=No+Image"}
                      alt={selectedEvent.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <AiOutlineDollar className="text-green-600" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Price</p>
                        <p className="font-semibold text-green-700">{selectedEvent.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <AiOutlineStock className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Stock</p>
                        <p className="font-semibold text-blue-700">{selectedEvent.stock} units</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <AiOutlineCalendar className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Start Date</p>
                        <p className="font-semibold text-purple-700">{selectedEvent.startDate ? formatDate(selectedEvent.startDate) : 'Not set'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl border border-orange-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <AiOutlineCalendar className="text-orange-600" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">End Date</p>
                        <p className="font-semibold text-orange-700">{selectedEvent.endDate ? formatDate(selectedEvent.endDate) : 'Not set'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details Section */}
              <div className="space-y-6">
                {/* Description */}
                {selectedEvent.description && (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
                  </div>
                )}

                {/* Additional Details */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Start Date</span>
                      <span className="font-medium text-gray-800">{selectedEvent.startDate ? formatDate(selectedEvent.startDate) : 'Not set'}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">End Date</span>
                      <span className="font-medium text-gray-800">{selectedEvent.endDate ? formatDate(selectedEvent.endDate) : 'Not set'}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Status</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedEvent.stock > 0 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {selectedEvent.stock > 0 ? 'Active' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEvents;
