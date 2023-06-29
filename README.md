Models:


Institution
- name

Branch
- address
- location
- contacts number
- background_img_path


Menu
- id
- name (ru, kg, en)
- id_category
- background_img_path
- активный (boolean)


Category
- id
- name (ru, kg, en)
- id_menu
- background_img_path
- активный (boolean)



Food
- id
- name (ru, kg, en)
- description (ru, kg, en)
- вес
- цена 
- id_category
- акция
- background_img_path
- в наличии (boolean)
- в архиве (boolean)


User
- id
- name (ru, kg, en)
- id_role
- активный (boolean)

