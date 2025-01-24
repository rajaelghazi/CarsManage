<template>
    <Section title="Contact us">
        <BaseCard title="Contact form">
            <template #end>
                <div class="ml-auto -m-1">
                    <Button label="Send Message" size="small" outlined />
                </div>
            </template>
            <Form @submit="onSubmit" class="flex flex-col gap-7">
                <div class="space-y-5">
                    <div class="flex items-center gap-5">
                        <FormField name="fullname" class="flex-1 flex flex-col gap-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium" for="fullname">{{ $t('Full name') }}</label>
                                <InputText v-model="form.fullname" id="fullname" fluid value="User full name" disabled />
                            </div>
    
                            <Message v-if="form.errors?.fullname" severity="error" size="small" variant="simple">
                                {{ form.errors.phone }}
                            </Message>
                        </FormField>
                        <FormField name="email" class="flex-1 flex flex-col gap-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium" for="email">{{ $t('Email') }}</label>
                                <InputText v-model="form.email" type="email" id="email" fluid value="email@gmail.com" disabled />
                            </div>
    
                            <Message v-if="form.errors?.email" severity="error" size="small" variant="simple">
                                {{ form.errors.email }}
                            </Message>
                        </FormField>
                    </div>
                    <div class="flex items-center gap-5">
                        <FormField name="phone" class="flex-1 flex flex-col gap-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium" for="phone">{{ $t('Phone') }}</label>
                                <InputText v-model="form.phone" id="phone" fluid value="+212 6548964123" disabled />
                            </div>
    
                            <Message v-if="form.errors?.phone" severity="error" size="small" variant="simple">
                                {{ form.errors.phone }}
                            </Message>
                        </FormField>
                        <FormField name="subject" class="flex-1 flex flex-col gap-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium" for="subject">{{ $t('Subject') }}</label>
                                <InputText v-model="form.subject" id="subject" fluid />
                            </div>
    
                            <Message v-if="form.errors?.subject" severity="error" size="small" variant="simple">
                                {{ form.errors.subject }}
                            </Message>
                        </FormField>
                    </div>
                    <FormField name="message" class="flex flex-col gap-2">
                        <div class="space-y-2 flex flex-col">
                            <label class="text-sm font-medium" for="message">{{ $t('Message') }}</label>
                            <Textarea v-model="note" rows="5" cols="30" />
                        </div>

                        <Message v-if="form.errors?.message" severity="error" size="small" variant="simple">
                            {{ form.errors.message }}
                        </Message>
                    </FormField>
                </div>
            </Form>
        </BaseCard>

        <BaseCard title="Live Support">
            <div class="flex items-center justify-between">
                <p>{{$t('Contact our support via whatsapp')}}</p>
                <Button as="a" href="https://wa.me/212656588699" target="_blank" rel="noopener" icon="fi-brands-whatsapp" label="+212 656-588699" severity="success" />
            </div>
        </BaseCard>
        <BaseCard title="Let us call you">
            <div class="flex items-center justify-between">
                <p>{{$t('Schedule a call with our team')}}</p>
                <Button as="a" href="#" target="_blank" rel="noopener" icon="fi-rr-calendar-clock" label="Schedule" />
            </div>
        </BaseCard>
    </Section>
</template>
<script setup>
import Section from '../_shared/section.vue';
import { useForm } from '@inertiajs/vue3';
const form = useForm({
	email: null,
    phone: null,
    subject: null,
    message: null,
});
</script>