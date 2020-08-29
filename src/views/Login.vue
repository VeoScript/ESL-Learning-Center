<template>
      <b-modal 
        id="login-modal" 
        title="Login" 
        size="md" 
        hide-footer 
        centered
        content-class="shadow"
    >
        <!-- <alert 
            v-show="error"
            :message="`${error}`"
        /> -->

        <b-form >
            <b-form-group label="Email">
                <b-form-input
                
                ></b-form-input>
                <!-- <div class="invalid-feedback feedback">
                    <span v-if="!$v.email.required">Email is required</span>
                    <span v-if="!$v.email.email">Email is invalid.</span>
                </div> -->
            </b-form-group>
            <b-form-group label="Password">
                <div class="input-group">
                    <input 
                        type="password" 
                        id="password"
                        class="form-control" 
                    >
                    <div class="input-group-append"  style="cursor: pointer;">
                        <!-- <i v-if="!showpassword" class="input-group-text">
                            <i class="fa fa-eye-slash"></i>
                        </i> -->
                        <i  class="input-group-text">
                            <i class="fa fa-eye"></i>
                        </i>
                    </div>
                    <!-- <div class="invalid-feedback feedback">
                        <span v-if="!$v.password.required">Password is required</span>
                        <span v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</span>
                        <span v-if="!$v.password.maxLength">Password must have at most {{ $v.password.$params.maxLength.max }} letters.</span>
                    </div> -->
                </div>
            </b-form-group>

            <hr>
            <b-row>
                <b-col>
                    <b-button 
                        block
                        variant="primary"
                    >Login</b-button>
                    <b-button 
                        variant="primary" 
                        disabled 
                        block
                    >
                        <b-spinner small type="grow"></b-spinner>
                        Loading...
                    </b-button>
                </b-col>
                <b-col>
                    <b-button 
                        block 
                        variant="outline-secondary"
                    >Cancel</b-button>
                </b-col>
            </b-row>

        </b-form>
    </b-modal>
</template>