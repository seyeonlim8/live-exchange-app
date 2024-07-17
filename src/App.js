import React, { useState } from 'react';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import './App.css';

Amplify.configure(config);

function App({ signOut, user }) {
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [newExpense, setNewExpense] = useState(0);

  async function callGetExpensesAPI() {
    setIsLoading(true); 
    const { username } = await getCurrentUser();
    const { tokens: session } = await fetchAuthSession();

    const getCurrentExpenses_API_ENDPOINT = 'https://p5938204l0.execute-api.us-east-2.amazonaws.com/stage1/get-current-expenses';
    try {
        const response = await fetch(getCurrentExpenses_API_ENDPOINT, {
          method: 'GET',
          headers: {
            'username': username,
          },
        });

        if (!response.ok) {
          throw new Error('Response was not ok');
        }
        const data = await response.json();
        setResponseMessage(data.message || 'Current total expense retrieved successfully.');
      } catch (error) {
        console.error('There was a problem with fetch operation.', error.message);
      } finally {
        setIsLoading(false);
      }
  }

  async function callUpdateExpensesAPI(inputExpenses) {
    setIsLoading(true); 
    const { username } = await getCurrentUser();
    const { tokens: session } = await fetchAuthSession();

    const updateCurrentExpenses_API_ENDPOINT = 'https://i7sn4f2cw1.execute-api.us-east-2.amazonaws.com/1/add-expenses';
    try {
        const response = await fetch(updateCurrentExpenses_API_ENDPOINT, {
          method: 'GET',
          headers: {
            'username': username,
            'newExpense': Number(inputExpenses),
          },
        });

        if (!response.ok) {
          throw new Error('Response was not ok');
        }
        const data = await response.json();
        setResponseMessage(data.message || 'Current total expense retrieved successfully.');
      } catch (error) {
        console.error('There was a problem with fetch operation.', error.message);
      } finally {
        setIsLoading(false);
      }
  }

  async function submitCurrency() {
    const selectedCurrency = document.getElementById('currencySelect').value;
    const convertCurrency_API_ENDPOINT = 'https://541t0a28al.execute-api.us-east-2.amazonaws.com/convert-currency';
    const { username } = await getCurrentUser();

    setIsLoading(true);
    try {
      const response = await fetch(convertCurrency_API_ENDPOINT, {
        method: 'GET',
        headers: {
          'username': username,
          'currency': selectedCurrency,
        },
      });

      if(!response.ok) {
        throw new Error('Response was not ok');
      }
      const data = await response.json();
      setResponseMessage(data.message || 'Currency retrieved.');
    } catch (error) {
      console.error('There was a problem with fetch operation.', error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app-container">
      <div className="signout">
        <span>Your Username: {user.username}</span> 
        <button onClick={signOut}>Sign out</button>
      </div>
      <div className="welcome">
        <h1>Welcome to Live Exchange.</h1>
      </div>

      <div className="getCurrent">
        <h2>Get/Update Your Expenses</h2>
        <div className='response'>
          <h3>Response: {isLoading ? 'Loading...' : responseMessage}</h3>
        </div>
        <button className="button-primary" onClick={callGetExpensesAPI}>Get Your Current Expenses</button>
      </div>

      <div className='update'>
        <input
          type="number"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
          placeholder="Enter amount to add"
        />
        <button className="button-primary" onClick={() => callUpdateExpensesAPI(newExpense)}>Add To Your Current Expenses</button>
        <div>
          (Enter a negative number to decrease your total expenses.)
        </div>
      </div>

      <div className='currency'>
        <h2>Currency Conversion</h2>
        <h3>Select the currency to convert USD to:</h3>
        <select id='currencySelect' className='currencySelect'>
          <option value='USD'>US Dollar (USD)</option>
          <option value='EUR'>Euro (EUR)</option>
          <option value='GBP'>British Pound (GBP)</option>
          <option value='KRW'>Korean Won (KRW)</option>
          <option value='JPY'>Japanese Yen (JPY)</option>
          <option value='CAD'>Canadian Dollar (CAD)</option>
          <option value='AUD'>Australian Dollar (AUD)</option>
          <option value='CHF'>Swiss Franc (CHF)</option>
          <option value='CNY'>Chinese Yuan (CNY)</option>
          <option value='INR'>Indian Rupee (INR)</option>
          <option value='RUB'>Russian Ruble (RUB)</option>
          <option value='BRL'>Brazilian Real (BRL)</option>
          <option value='ZAR'>South African Rand (ZAR)</option>
          <option value='MXN'>Mexican Peso (MXN)</option>
          <option value='HKD'>Hong Kong Dollar (HKD)</option>
          <option value='SGD'>Singapore Dollar (SGD)</option>
          <option value='NOK'>Norwegian Krone (NOK)</option>
          <option value='SEK'>Swedish Krona (SEK)</option>
          <option value='NZD'>New Zealand Dollar (NZD)</option>
          <option value='DKK'>Danish Krone (DKK)</option>
          <option value='MYR'>Malaysian Ringgit (MYR)</option>
          <option value='IDR'>Indonesian Rupiah (IDR)</option>
          <option value='THB'>Thai Baht (THB)</option>
          <option value='PHP'>Philippine Peso (PHP)</option>
          <option value='VND'>Vietnamese Dong (VND)</option>
          <option value='PLN'>Polish Zloty (PLN)</option>
          <option value='HUF'>Hungarian Forint (HUF)</option>
          <option value='CZK'>Czech Koruna (CZK)</option>
          <option value='ILS'>Israeli Shekel (ILS)</option>
          <option value='SAR'>Saudi Riyal (SAR)</option>
          <option value='AED'>Emirati Dirham (AED)</option>
          <option value='TRY'>Turkish Lira (TRY)</option>
          <option value='EGP'>Egyptian Pound (EGP)</option>
          <option value='PKR'>Pakistani Rupee (PKR)</option>
          <option value='BDT'>Bangladeshi Taka (BDT)</option>
          <option value='LKR'>Sri Lankan Rupee (LKR)</option>
          <option value='NGN'>Nigerian Naira (NGN)</option>
          <option value='KES'>Kenyan Shilling (KES)</option>
          <option value='GHS'>Ghanaian Cedi (GHS)</option>
          <option value='TWD'>Taiwan Dollar (TWD)</option>
          <option value='ARS'>Argentine Peso (ARS)</option>
          <option value='CLP'>Chilean Peso (CLP)</option>
          <option value='PEN'>Peruvian Sol (PEN)</option>
          <option value='COP'>Colombian Peso (COP)</option>
          <option value='MAD'>Moroccan Dirham (MAD)</option>
          <option value='DZD'>Algerian Dinar (DZD)</option>
          <option value='UYU'>Uruguayan Peso (UYU)</option>
          <option value='VEF'>Venezuelan Bolívar (VEF)</option>
          <option value='RON'>Romanian Leu (RON)</option>
          <option value='BGN'>Bulgarian Lev (BGN)</option>
          <option value='HRK'>Croatian Kuna (HRK)</option>
          <option value='ISK'>Icelandic Krona (ISK)</option>
        </select>
        <button className="button-primary" onClick={submitCurrency}>Convert</button>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
