import { html } from 'lit';

export const searchBarTemplate = (context) => {
    return html `
    <style>
    .inputText {
        flex: 1;
        border-radius: 5px;
        width: ${context.width}px;
        background-color: #faf7f7;
        height: 30px;
        border-style: solid;
        border-color: lightgray;
        text-indent: 30px;
       
    }
    .searchbar:hover {
        background-color: #d3d3d3;
    }
    .container{
        width: ${context.width}px;
        margin-right:20px;
        text-indent: 30px;
        position: relative;
        top: 28px
    }
    .searchbar{
        width: ${context.width}px;
        height: 25px;
        text-indent: 12px;
        background-color: #faf7f7;
        color: black;
        border-style: solid;
        border-top: none;
        border-color: lightgray;
        cursor: pointer;
    }
    </style>
    <div class="container">
    <svg fill="gray" height="20px" width="20px" style="position: relative;
    left: -22px;
    top: 32px;"
  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>
    <input 
    type="text" 
    value=${context.value}
    class="inputText" 
    placeholder="Search Users" 
    @click=${(e) => context.fetchUsers(e)}
    @input=${(e) => context.searchUsers(e)}
    >
    </div>
    <div class="searchContainer" style="height:79px;position: relative;
    top: 28px;left: 3px;">
    ${context.usersInSearch ? html` 
    ${context.usersInSearch[0] ? html`<div class="searchbar" @click=${(e) =>context.routeToSearchedUser(e,context.usersInSearch[0].email)}>${context.usersInSearch[0].Name}</div>` : html ``}
    ${context.usersInSearch[1] ? html`<div class="searchbar" @click=${(e) =>context.routeToSearchedUser(e,context.usersInSearch[1].email)}>${context.usersInSearch[1].Name}</div>` : html ``}
    ${context.usersInSearch[2] ? html`<div class="searchbar" @click=${(e) =>context.routeToSearchedUser(e,context.usersInSearch[2].email)}>${context.usersInSearch[2].Name}</div>` : html ``}
    ${context.usersInSearch && context.usersInSearch.length ===0 ? html `<div class="searchbar">No Users Found</div>`: 
    html``}`
    
    : html``}
    </div>
     `  
}