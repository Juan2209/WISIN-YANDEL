
import tkinter as tk
from tkinter import scrolledtext
from tkinter import messagebox

def add_br_tags():
    # Obtener el texto del área de entrada
    input_text = input_area.get("1.0", tk.END)
    
    # Dividir el texto en líneas
    lines = input_text.split('\n')
    
    # Añadir la etiqueta <br> al final de cada línea
    lines_with_br = [line + '<br>' for line in lines]
    
    # Unir las líneas nuevamente en un solo texto
    result = '\n'.join(lines_with_br)
    
    # Mostrar el resultado en el área de salida
    output_area.delete("1.0", tk.END)
    output_area.insert("1.0", result)
    
    # Mostrar mensaje de éxito
    messagebox.showinfo("Éxito", "Se han añadido las etiquetas <br> correctamente.")

def copy_to_clipboard():
    # Obtener el texto del área de salida
    result_text = output_area.get("1.0", tk.END)
    
    # Limpiar el portapapeles y añadir el texto
    app.clipboard_clear()
    app.clipboard_append(result_text)
    
    # Mostrar mensaje de éxito
    messagebox.showinfo("Copiado", "El texto ha sido copiado al portapapeles.")

def clear_all():
    # Limpiar ambas áreas de texto
    input_area.delete("1.0", tk.END)
    output_area.delete("1.0", tk.END)

# Crear la ventana principal
app = tk.Tk()
app.title("Añadir etiquetas <br>")
app.geometry("600x500")

# Crear marco principal con padding
main_frame = tk.Frame(app, padx=10, pady=10)
main_frame.pack(fill=tk.BOTH, expand=True)

# Etiqueta para el área de entrada
input_label = tk.Label(main_frame, text="Ingrese su texto:")
input_label.pack(anchor=tk.W, pady=(0, 5))

# Área de entrada de texto con scroll
input_area = scrolledtext.ScrolledText(main_frame, height=10, wrap=tk.WORD)
input_area.pack(fill=tk.BOTH, expand=True, pady=(0, 10))

# Marco para botones
button_frame = tk.Frame(main_frame)
button_frame.pack(fill=tk.X, pady=(0, 10))

# Botón para procesar el texto
process_button = tk.Button(button_frame, text="Añadir etiquetas <br>", command=add_br_tags, bg="#4CAF50", fg="white", padx=10)
process_button.pack(side=tk.LEFT, padx=(0, 5))

# Botón para copiar el resultado
copy_button = tk.Button(button_frame, text="Copiar resultado", command=copy_to_clipboard, bg="#2196F3", fg="white", padx=10)
copy_button.pack(side=tk.LEFT, padx=(0, 5))

# Botón para limpiar todo
clear_button = tk.Button(button_frame, text="Limpiar todo", command=clear_all, bg="#f44336", fg="white", padx=10)
clear_button.pack(side=tk.LEFT)

# Etiqueta para el área de salida
output_label = tk.Label(main_frame, text="Resultado:")
output_label.pack(anchor=tk.W, pady=(0, 5))

# Área de salida de texto con scroll
output_area = scrolledtext.ScrolledText(main_frame, height=10, wrap=tk.WORD)
output_area.pack(fill=tk.BOTH, expand=True)

# Iniciar el bucle principal
app.mainloop()