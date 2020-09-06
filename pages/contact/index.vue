<template>
    <div class="contact-wrapper">
        <div class="icons-wrapper">
            <a href="https://github.com/sensanaty" class="social-link" target="_blank" rel="noopener">
                <GithubIcon class="social-icon"/>
            </a>
            <a href="https://linkedin.com/in/lukasalevic" class="social-link" target="_blank" rel="noopener">
                <LinkedinIcon class="social-icon"/>
            </a>
            <a href="mailto:salevic@lu-ka.me?subject=%5Blu-ka.me%20email%5D" class="social-link" target="_blank"
               rel="noopener">
                <GmailIcon class="social-icon"/>
            </a>
        </div>
        <div class="form-section">
            <h1 class="contact-header">Looking for a fullstack developer for your webapp?</h1>
            <p class="form-intro">Feel free to send me a message through the form below, or through one of my socials
                above</p>

            <form name="contact-me" method="post" data-netlify="true" data-netlify-bot-field="honey" netlify>
                <ul v-if="errors.length > 0">
                    <p>Please fix the below errors and try again:</p>
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="form.email" placeholder="Your Email" required/>
                <label for="message">Message</label>
                <textarea type="text" id="message" name="message" v-model="form.message"
                          placeholder="What project did you have in mind?"/>
                <button type="submit" @click.prevent="handleSubmit">Send</button>
            </form>

        </div>
    </div>
</template>

<script>
import GithubIcon from "@/assets/icons/github.svg"
import LinkedinIcon from "@/assets/icons/linkedin.svg"
import GmailIcon from "@/assets/icons/gmail.svg"

export default {
    name: "Contact",
    components: {
        GithubIcon,
        LinkedinIcon,
        GmailIcon
    },
    data() {
        return {
            form: {
                email: null,
                message: null
            },
            errors: []
        }
    },
    methods: {
        encode(data) {
            return Object.keys(data)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                .join("&")
        },
        validForm() {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            const emailField = document.querySelector("#email")
            const messageField = document.querySelector("#message")
            this.errors = []

            if (this.form.email && emailRegex.test(this.form.email) && this.form.message) {
                emailField.style.outline = "0 solid #272727"
                messageField.style.outline = "0 solid #272727"
                return true
            }

            if (this.form.email) {
                emailField.style.outline = "1px solid #272727"
            } else if (!this.form.email) {
                this.errors.push("No Email Provided")
                emailField.style.outline = "1px solid red"
            } else if (!emailRegex.test(this.form.email)) {
                this.errors.push("The Email You Entered Was Invalid, Please Double Check It")
                emailField.style.outline = "1px solid red"
            } else if (this.form.email) {
                emailField.style.outline = "0 solid #272727"
            }

            if (this.form.message) {
                messageField.style.outline = "1px solid #272727"
            } else if (!this.form.message) {
                this.errors.push("No Message Provided")
                messageField.style.outline = "1px solid red"
            }

            return false
        },
        handleSubmit() {
            const formWrapper = document.querySelector("form")

            if (this.validForm()) {
                formWrapper.innerHTML = "Sending"
                formWrapper.classList.add("loading")
                fetch("/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: this.encode({
                        "form-name": "contact-me",
                        ...this.form
                    })
                })
                    .then(() => {
                        formWrapper.classList.remove("loading")
                        formWrapper.classList.add("loaded")
                        formWrapper.innerHTML = `Thanks! I'll get in touch with you soon at ${this.form.email}!`
                    })
                    .catch(error => alert(error))
            }
        }
    },
    head() {
        return {
            title: "LUKA | CONTACT"
        }
    }
}
</script>

<style lang="scss">
.icons-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 75px;
    background: $dark-highlight;
    margin-top: 35px;
    margin-bottom: 40px;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.social-icon {
    height: 50%;
    fill: $highlight;
    transition: all 150ms ease-in-out;

    &:hover {
        fill: darken($highlight, 15);
        transform: translateY(1px)
    }
}

.form-section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 85%;
    padding: 20px 25px;
    margin: 0 auto;
}

.contact-header {
    margin: 0;
    font-size: 3em;
}

.form-intro {
    font-size: 1.4em;
}

form {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 50%;

    ::selection {
        background: $highlight;
        color: black;
    }

    label {
        align-self: center;
        font-size: 1.5em;
        margin: 15px 0;
        cursor: text;
    }

    input, textarea {
        background: $dark-highlight;
        align-self: center;
        font-size: 1.2em;
        padding: 10px 15px;
        color: $secondary;
        border: none;
        outline: 2px solid $main;
        transition: outline 150ms ease-in-out;

        &:focus {
            outline: 1px solid $highlight;
        }
    }

    input {
        width: 50%

        &:-webkit-autofill {
            -webkit-text-fill-color: $secondary;
            -webkit-box-shadow: 0 0 0 1000px $dark-highlight inset;
            transition: background-color 5000s ease-in-out 0s;
        }
    }

    textarea {
        width: 100%;
        min-height: 300px;
        resize: none;
        margin-bottom: 20px;
    }

    ul {
        margin: 0;
        padding: 0;

        p {
            margin: 0 0 15px 0;
            font-size: 1.3em;
            text-align: center;
        }

        li {
            list-style: none;
            text-align: center;
            color: red;
        }
    }

    button {
        font-weight: 700;
        font-size: 2em;
        border: none;
        background: $dark-highlight;
        color: $highlight;
        padding: 7px 20px;
        cursor: pointer;
        transition: all 150ms ease-in-out;

        &:hover {
            background: lighten($dark-highlight, 4);
        }
    }
}


</style>
