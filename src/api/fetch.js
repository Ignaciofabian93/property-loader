import axiosUrl from "./config";

export const fetchUser = async (user) => {
  try {
    const response = await axiosUrl.post("/login", user);
    return response.data;
  } catch (error) {
    throw new Error("Error en peticion fetch usuario");
  }
};

export const getProperties = async () => {
  try {
    const response = await axiosUrl.get(`/propiedades`);
    return response.data;
  } catch (error) {
    throw new Error("No se pudo eliminar la propiedad");
  }
};

export const getProperty = async (id) => {
  try {
    const response = await axiosUrl.get(`/propiedades/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("No se pudo eliminar la propiedad");
  }
};

export const postProperty = async (property) => {
  try {
    const response = await axiosUrl.post("/propiedades", property);
    return response.data;
  } catch (error) {
    throw new Error("Error al intentar guardar propiedad");
  }
};

export const updateProperty = async (id, data) => {
  try {
    const response = await axiosUrl.put(`/propiedades/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error("No se pudo actualizar la propiedad");
  }
};

export const deleteProperty = async (id) => {
  try {
    const response = await axiosUrl.delete(`/propiedades/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("No se pudo eliminar la propiedad");
  }
};
