<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="todos-wrapper mt-5">
          <div class="todos-header">
            <h2 class="h5">Todo List</h2>
          </div>
          <div class="todos-list">
            <ul>
              <li>
                <input type="checkbox">
                <label for=""></label>
                <button class="btn btn-sm btn-danger float-right">
                  <font-awesome-icon icon="trash" :style="{ color: '#fff' }"/>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todos'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .todos-wrapper {
    background: #fff;
    border: 1px solid #e9e9e9;
    .todos-header{
      border-bottom: 1px solid #e9e9e9;
      padding: 15px 25px;
    }
    .todos-list {
      padding: 25px;
      ul {
        li {
          padding: 15px 0;
          &+li {
            border-top: 1px solid #e9e9e9;
          }
          input[type='checkbox'] {
            display: none;
          }
          label {
            padding-left: 30px;
            margin-bottom: 0;
            position: relative;
            &.complete {
              text-decoration: line-through;
            }
            &:before {
              content: "";
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              width: 16px;
              height: 16px;
              border: 1px solid #ccc;
              border-radius: 3px;
            }
            >svg {
              position: absolute;
              left: 2px;
              top: 50%;
              transform: translateY(-50%);
              visibility: hidden;
            }
          }

          input[type="checkbox"]:checked + label {
            &:before {
              background: #333;
              border-color: #333;
            }
            >svg {
              visibility: visible;
            }
          }
        }
      }
    }
  } 
</style>
