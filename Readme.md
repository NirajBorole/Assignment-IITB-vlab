# Assignment

## Overview

The assignment is a web-based application designed to manage a list of chemicals. Users can add, edit, sort, and delete chemical entries, I have made this using HTML, Custom CSS, Javascript.

## Features

- **Add** new chemical entries.
- **Edit** existing entries directly in the table.
- **Sort** entries in ascending or descending order by chemical name.
- **Delete** entries using checkboxes for easy selection.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. Clone the repository or download the project files.
   ```bash
   git clone https://github.com/NirajBorole/Frontend-Assignment-IITB-.git
   ```

## Data Flow and Design Choice

- To load data from JSON as stated in assignment problem statement i have used fetch() API to load data.
- User can interact with preloaded data by using _edit_, _sort_, _delete_ options. All the actions are handled using Javascript DOM API.

### Design choices

HTML - I have used various tags/elements like to header, main, table while keeping mind about accessibility.

CSS - Decided to go with Custom CSS as problem statement stated to keep minimized use of library and file should be less that 7mb.

Javascript

- For Event handling / user onclick interactions to features like add, edit, sort and delete data.
- Using javascript allowed me to dynamically manipulate data using DOM API and FETCH API.
- By using checkbox i was able to build feature to edit checkbox selected row.
