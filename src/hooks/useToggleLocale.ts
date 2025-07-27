import { useState, useEffect } from "react";

export const useToggleMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const openForm = (form: string) => {
    setSelectedForm(form);
    setMenuOpen(true);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);

  return {
    menuOpen,
    setMenuOpen,
    selectedForm,
    openForm,
  };
};
