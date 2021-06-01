<template><div>
    <ui-form method="post" action="/api/setting/save-all" v-model="settings">
        <ui-field label="Host / Porta">
            <div class="input-group">
                <input type="text" class="form-control" v-model="settings['mail.mailers.smtp.host']">
                <input type="text" class="form-control" v-model="settings['mail.mailers.smtp.port']" style="max-width:100px;">
            </div>
        </ui-field>

        <ui-field label="Login do e-mail">
            <input type="text" class="form-control" v-model="settings['mail.mailers.smtp.username']">
        </ui-field>

        <ui-field label="Senha do e-mail">
            <ui-password v-model="settings['mail.mailers.smtp.password']"></ui-password>
        </ui-field>

        <div class="text-right">
            <button type="button" class="btn btn-outline-primary" @click="modalEmailTest={to:'', message:''}">
                Testar e-mail
            </button>
        </div>

        <ui-modal v-model="modalEmailTest">
            <template #header>Teste de e-mail</template>
            <template #body>
                <ui-field label="Para">
                    <input type="text" class="form-control" v-model="modalEmailTest.to">
                </ui-field>

                <ui-field label="Mensagem" :horizontal="true">
                    <ui-html v-model="modalEmailTest.message"></ui-html>
                </ui-field>
            </template>
            <template #footer>
                <button type="button" class="btn" @click="modalEmailTest=false">
                    Cancelar
                </button>

                <button type="button" class="btn btn-primary">
                    Enviar
                </button>
            </template>
        </ui-modal>

        <ui-actions>
            <button type="submit" class="btn btn-primary">
                <i class="fas fa-save"></i> Salvar
            </button>
        </ui-actions>
    </ui-form>

    <el-collapse v-model="active" class="mt-4" accordion>
        <el-collapse-item title="SMTP" name="smtp">
            <p>Para enviar e-mail pelo sistema, é necessário configurar uma caixa de e-mail como local de onde as mensagens partirão.</p>
            <p>Você pode configurar qualquer servidor, desde que saiba corretamente os dados de host e porta, juntamente com seu login e senha.</p>
        </el-collapse-item>
        <el-collapse-item title="SMTP Gmail" name="gmail">
            <p>Uma das maneiras mais simples de configurar é utilizando sua conta Gmail.</p>
            <p>Para envio de email através de autenticação SMTP Gmail, siga os passos abaixo:</p>
            <ol class="my-3 mb-0">
                <li>Acesse a conta de e-mail através do browser;</li>
                <li>Clique em <a href="https://myaccount.google.com/?utm_source=OGB&amp;tab=mk&amp;utm_medium=act" target="_blank">Gerenciar sua conta do Google</a>;</li>
                <li>Na lateral esquerda, clique em <a href="https://myaccount.google.com/security?gar=1" target="_blank">Segurança</a>;</li>
                <li>Clique na opção "Verificação em duas etapas" e proceda com a confirmação de token;</li>
                <li>Ao concluir, clique na opção "Senhas de app", no select que vai aparecer a seguir, selecione respectivamente "E-mail" e "Outro". Dê um nome personalizado para sua senha e clique em "Gerar".</li>
            </ol>
            <p>Essa será a senha que você vai precisar para que o sistema envie e-mails. <a href="javascript:;">O padrão para conexão Gmail é host <strong>smtp.gmail.com</strong> porta <strong>465</strong></a>.</p>
        </el-collapse-item>
    </el-collapse>
</div></template>

<script>
export default {
    data() {
        return {
            active: '',
            modalEmailTest: false,
            settings: {
                'mail.mailers.smtp.encryption': '',
                'mail.mailers.smtp.host': '',
                'mail.mailers.smtp.port': '',
                'mail.mailers.smtp.username': '',
                'mail.mailers.smtp.password': '',
            },
        };
    },

    methods: {
        loadAll() {
            this.$axios.get('/api/setting/load-all').then(resp => {
                this.settings = resp.data;
            });
        },
    },

    mounted() {
        this.loadAll();
    },
}
</script>